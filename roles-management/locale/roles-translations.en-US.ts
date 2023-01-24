/*
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 * Copyright 2022 GIP SmartMercial GmbH, Germany
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
import { I18nTranslation } from '@zeta/i18n';


export const roles_translations_en_US: I18nTranslation[] = [
    // RolesManagementComponent
    // html
    {
        key: 'xmcp.xacm.roles.header-roles',
        value: 'Roles'
    },
    {
        key: 'xmcp.xacm.roles.button-clear-filters',
        value: 'Clear Filters'
    },
    {
        key: 'xmcp.xacm.roles.tooltip-refresh',
        value: 'Refresh'
    },
    {
        key: 'xmcp.xacm.roles.tooltip-add',
        value: 'Add'
    },
    {
        key: 'xmcp.xacm.roles.header-role-details',
        value: 'Role Details'
    },
    {
        key: 'xmcp.xacm.roles.tooltip-cancel',
        value: 'Cancel'
    },
    {
        key: 'xmcp.xacm.roles.aria-role-name',
        value: 'Role Name'
    },
    {
        key: 'xmcp.xacm.roles.label-documentation',
        value: 'Documentation'
    },
    {
        key: 'xmcp.xacm.roles.header-granted-rights',
        value: 'Granted Rights'
    },
    {
        key: 'xmcp.xacm.roles.tooltip-grant-new-right',
        value: 'Grant Right'
    },
    {
        key: 'xmcp.xacm.roles.button-revoke-rights',
        value: 'Revoke Rights'
    },
    {
        key: 'xmcp.xacm.roles.button-cancel',
        value: 'Cancel'
    },
    {
        key: 'xmcp.xacm.roles.button-apply',
        value: 'Apply'
    },

    // typescript
    {
        key: 'xmcp.xacm.roles.question',
        value: 'Question'
    },
    {
        key: 'xmcp.xacm.roles.delete',
        value: 'Delete %name%?'
    },
    {
        key: 'xmcp.xacm.roles.edit',
        value: 'Edit'
    },
    {
        key: 'xmcp.xacm.roles.revoke',
        value: 'Revoke'
    },
    {
        key: 'xmcp.xacm.roles.unknown-right-title',
        value: 'Unknown Right'
    },
    {
        key: 'xmcp.xacm.roles.unknown-right-body',
        value: 'Linked right "%right%" is not known to the factory. Create right in order to manage this role?'
    }
];
