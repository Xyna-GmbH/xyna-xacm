/*
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 * Copyright 2023 Xyna GmbH, Germany
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 */
import { HttpClient } from '@angular/common/http';
import { Component, Injector, OnDestroy } from '@angular/core';

import { StartOrderOptionsBuilder } from '@zeta/api';
import { I18nService, LocaleService } from '@zeta/i18n';
import { XcAutocompleteDataWrapper, XcDialogService, XcOptionItem, XcOptionItemString, XcRichListItem } from '@zeta/xc';

import { Observable, of, Subject, Subscription } from 'rxjs';

import { ACMApiService } from '../acm-api.service';
import { extractError, RTC, XACM_WF } from '../acm-consts';
import { ACMRouteComponent } from '../acm-route-component.class';
import { ACMSettingsService } from '../acm-settings.service';
import { XoCreateUserRequest } from '../xo/xo-create-user-request.model';
import { XoRoleNameArray } from '../xo/xo-role-name.model';
import { XoUpdateUserRequest } from '../xo/xo-update-user-request.model';
import { XoUser, XoUserArray } from '../xo/xo-user.model';
import { XoUsername } from '../xo/xo-username.model';
import { AuthenticationChangedObject, AuthenticationRichListItemComponent, AuthenticationRichListItemData } from './items/authentication-rich-list-items/authentication-rich-list-items.component';
import { user_translations_de_DE } from './locale/user-translations.de-DE';
import { user_translations_en_US } from './locale/user-translations.en-US';
import { AddNewUserComponent, AddNewUserComponentData } from './modal/add-new-user/add-new-user.component';


@Component({
    selector: 'user-management',
    templateUrl: './user-management.component.html',
    styleUrls: ['./user-management.component.scss'],
    standalone: false
})
export class UserManagementComponent extends ACMRouteComponent<XoUser> implements OnDestroy {

    pw = '';
    pwr = '';

    roleDataWrapper: XcAutocompleteDataWrapper;
    authenticationRichListItems: XcRichListItem[] = [];
    usedChangeSubject = new Subject<AuthenticationChangedObject>();
    subscriptionOfUsedChangeSubject: Subscription;

    constructor(
        injector: Injector,
        apiService: ACMApiService,
        i18nService: I18nService,
        dialogService: XcDialogService,
        private readonly httpClient: HttpClient,
        settings: ACMSettingsService
    ) {
        super(injector, apiService, i18nService, dialogService, settings);

        this.roleDataWrapper = new XcAutocompleteDataWrapper(
            () => this.currentObject ? this.currentObject.role : null,
            value => this.currentObject.role = value
        );

        this.getRolesObservable().subscribe(roles => this.roleDataWrapper.values = roles.data.map<XcOptionItem>(r => XcOptionItemString(r.roleName)));

        this.currentObjectChange.subscribe(_ => {
            this.roleDataWrapper.update();
            this.resetPasswordForm();
            if (this.subscriptionOfUsedChangeSubject) {
                this.subscriptionOfUsedChangeSubject.unsubscribe();
            }
            this.subscriptionOfUsedChangeSubject =
                this.usedChangeSubject.subscribe(obj => this.changeUsageOfDomain(obj.used, obj.domain.name));

            this.syncAuthenticationRichListItems();
        });

        this.i18nService.setTranslations(LocaleService.DE_DE, user_translations_de_DE);
        this.i18nService.setTranslations(LocaleService.EN_US, user_translations_en_US);
    }

    protected getTableWorkflow(): string {
        return XACM_WF.xmcp.xacm.usermanagement.GetUsers;
    }

    beforeInitTableRefresh() {
        super.beforeInitTableRefresh();

        this.tableDataSource.output = XoUserArray;
        this.tableDataSource.filterEnums.set(XoUser.getAccessorMap().locked, of(<XcOptionItem[]>[
            { name: '', value: '' }, { name: 'true', value: 'true' }, { name: 'false', value: 'false' }
        ]));
    }

    get passwordsMatch(): boolean {
        // if 1st pw input field is empty - password will be ignored and do not need to match
        return !this.pw || this.pw === this.pwr;
    }

    create(refUser: XoUser) {
        const data: AddNewUserComponentData = {
            roles: this.getRolesObservable(),
            domains: this.getDomainsObservable(),
            refUser
        };
        this.dialogService.custom<XoCreateUserRequest, AddNewUserComponentData>(AddNewUserComponent, data).afterDismissResult()
            .subscribe(
                userResult => {
                    if (userResult) {
                        this.createUser(userResult).subscribe(requestResult => {
                            if (requestResult && requestResult.success) {
                                this.refresh(true);
                            } else {
                                this.operationFailed();
                            }
                        });
                    }
                },
                error => this.dialogService.error(extractError(error))
            );
    }

    copy(tableObject?: XoUser) {
        this.create(tableObject);
    }

    save() {

        if (this.passwordsMatch) {
            const request = new XoUpdateUserRequest();
            request.username = this.currentObject.user;
            request.locked = this.currentObject.locked;
            request.role = this.currentObject.role;
            if (this.pw) {
                request.password = this.pw;
            } else {
                this.pwr = '';
            }

            request.domains = this.convertDomainStringToArray(this.currentObject.domains);

            this.updateUser(request).subscribe(requestResult => {
                if (requestResult && requestResult.success) {
                    this.refresh();
                    this.closeDetails();
                } else {
                    this.operationFailed();
                }
                this.resetPasswordForm();
            },
                error => this.dialogService.error(extractError(error)));
        }
    }

    delete(tableObject?: XoUser) {
        const user = tableObject || this.currentObject;
        const object = new XoUsername();
        object.name = user.user;

        const questionTitle = this.i18nService.translate('xmcp.xacm.user.question');
        const question = this.i18nService.translate('xmcp.xacm.user.delete', { key: '%name%', value: user.user });

        const sendRequest = () => {
            this.apiService.startOrder(RTC, XACM_WF.xmcp.xacm.usermanagement.DeleteUser, object, null, StartOrderOptionsBuilder.defaultOptionsWithErrorMessage).subscribe(
                result => {
                    if (result && !result.errorMessage) {
                        this.currentObject = null;
                        this.refresh();
                    } else {
                        this.dialogService.error(result.errorMessage);
                    }
                },
                error => this.dialogService.error(extractError(error))
            );
        };

        this.dialogService.confirm(questionTitle, question).afterDismissResult().subscribe(res => {
            if (res) {
                sendRequest();
            }
        });

    }

    clearFilters() {
        this.tableDataSource.resetFilters();
    }

    private updateUser(request: XoUpdateUserRequest): Observable<{ success: boolean }> {
        return this.httpClient.post('xacm/updateuser', request.encode()) as Observable<{ success: boolean }>;
    }

    private createUser(request: XoCreateUserRequest): Observable<{ success: boolean }> {
        return this.httpClient.post('xacm/createuser', request.encode()) as Observable<{ success: boolean }>;
    }

    private operationFailed() {
        const infoTitle = this.i18nService.translate('xmcp.xacm.user.failure');
        const info = this.i18nService.translate('xmcp.xacm.user.operation-failed');
        this.dialogService.info(infoTitle, info);
    }

    private getRolesObservable(): Observable<XoRoleNameArray> {
        const subj = new Subject<XoRoleNameArray>();
        const wf = XACM_WF.xmcp.xacm.usermanagement.GetRoles;
        this.apiService.startOrder(RTC, wf, [], XoRoleNameArray, StartOrderOptionsBuilder.defaultOptionsWithErrorMessage).subscribe(
            result => {
                if (result) {
                    if (result.errorMessage) {
                        subj.error(result.errorMessage);
                    } else {
                        subj.next(result.output[0] as XoRoleNameArray);
                    }
                }
            },
            error => subj.error(error),
            () => subj.complete()
        );

        return subj.asObservable();
    }

    private syncAuthenticationRichListItems() {

        this.authenticationRichListItems = [];

        // only if there is a current object, we need to find all domains
        if (this.currentObject) {
            this.getDomainsObservable().subscribe(xarr => {
                if (xarr) {
                    xarr.data.forEach(domain => {

                        const data: XcRichListItem<AuthenticationRichListItemData> = {
                            component: AuthenticationRichListItemComponent,
                            data: {
                                item: domain,
                                used: this.isDomainUsed(domain.name),
                                usedChangeSubject: this.usedChangeSubject
                            },
                            selectable: false
                        };
                        this.authenticationRichListItems.push(data);
                    });
                }
            });
        }
    }

    private isDomainUsed(name: string): boolean {
        return this.currentObject ? this.currentObject.domains.indexOf(name) >= 0 : false;
    }

    private convertDomainStringToArray(str: string): string[] {
        return str.split(',').map<string>(s => s.trim()).filter(s => s);
    }

    convertDomainArrayToString(strs: string[]): string {
        return strs.join(',');
    }

    private changeUsageOfDomain(wanted: boolean, domain: string) {
        const alreadyUsed = this.isDomainUsed(domain);
        const domainStrings = this.convertDomainStringToArray(this.currentObject.domains);
        if (wanted) {
            if (!alreadyUsed) {
                // add
                this.currentObject.domains = this.convertDomainArrayToString(domainStrings.concat(domain));
            }
        } else if (alreadyUsed) {
            // remove
            this.currentObject.domains = this.convertDomainArrayToString(domainStrings.filter(str => str !== domain));
        }
    }

    private resetPasswordForm() {
        this.pw = '';
        this.pwr = '';
    }

    ngOnDestroy() {
        if (this.subscriptionOfUsedChangeSubject) {
            this.subscriptionOfUsedChangeSubject.unsubscribe();
        }
    }

}
