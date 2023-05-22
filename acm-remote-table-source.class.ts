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
import { XcRemoteTableDataSource } from '@zeta/xc';

import { Observable, Subject } from 'rxjs';

import { ACMTableObject } from './xo/acm-table-object.model';


export class AcmRemoteTableDataSource<T extends ACMTableObject = ACMTableObject> extends XcRemoteTableDataSource<T> {

    numberOfRefreshes = 0;

    refresh() {
        super.refresh();
        this.numberOfRefreshes++;
    }

    tableWait(extraRefresh?: boolean): Observable<number> {
        const subj = new Subject<number>();
        const stamp = performance.now();
        if (extraRefresh) {
            this.refresh();
        }
        const handler = window.setInterval(() => {
            if (!this.refreshing) {
                window.setTimeout(() => {
                    window.clearInterval(handler);
                });
                subj.next(performance.now() - stamp);
                subj.complete();
            }
        }, 50);
        return subj.asObservable();
    }

    findUniqueKey(hash: string): string {
        const found = this.data.find(row => row.hashedUniqueKey === hash);
        return found ? found.uniqueKey : '';
    }

}
