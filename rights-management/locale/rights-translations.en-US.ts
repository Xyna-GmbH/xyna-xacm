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
import { I18nTranslation } from '@zeta/i18n';


export const rights_translations_en_US: I18nTranslation[] = [
    // RightsManagementComponent
    // html
    {
        key: 'xmcp.xacm.rights.header',
        value: 'Rights'
    },
    {
        key: 'xmcp.xacm.rights.button-clear-filters',
        value: 'Clear Filters'
    },
    {
        key: 'xmcp.xacm.rights.tooltip-refresh',
        value: 'Refresh'
    },
    {
        key: 'xmcp.xacm.rights.tooltip-add',
        value: 'Add'
    },
    {
        key: 'xmcp.xacm.rights.header-right-details',
        value: 'Right Details'
    },
    {
        key: 'xmcp.xacm.rights.tooltip-cancel',
        value: 'Cancel'
    },
    {
        key: 'xmcp.xacm.rights.aria-right',
        value: 'Right'
    },
    {
        key: 'xmcp.xacm.rights.header-parameter-definition',
        value: 'Parameter Definition'
    },
    {
        key: 'xmcp.xacm.rights.footer-0-parameters',
        value: '0 Parameters'
    },
    {
        key: 'xmcp.xacm.rights.label-documentation',
        value: 'Documentation'
    },
    {
        key: 'xmcp.xacm.rights.button-cancel',
        value: 'Cancel'
    },
    {
        key: 'xmcp.xacm.rights.button-apply',
        value: 'Apply'
    },

    // typescript
    {
        key: 'xmcp.xacm.rights.question',
        value: 'Question'
    },
    {
        key: 'xmcp.xacm.rights.delete',
        value: 'Delete %name%?'
    },

    // ParameterRichlistItemComponent
    // html
    {
        key: 'xmcp.xacm.rights.parameter-richlist-item.label-type',
        value: 'Type'
    },
    {
        key: 'xmcp.xacm.rights.parameter-richlist-item.label-value',
        value: 'Value'
    },
    {
        key: 'xmcp.xacm.rights.parameter-richlist-item.label-definition',
        value: 'Definition'
    },

    // AddNewRightComponent
    {
        key: 'xmcp.xacm.rights.add-new-right.right-name-help',
        value: 'The Right Name has to match a point-separated expression starting with small cases, e.g. %exp1% and can be extended by additional right parameters.'
    },
    {
        key: 'xmcp.xacm.rights.add-new-right.parameter-help-text',
        value:
            `There are 3 different types of parameter:

        Options Type, where exactly one option of the given options can be chosen.
        Definition must be a comma separated list of valid options.
        Valid option:
        String greater than 1, starting with a letter.
        Allowed characters after that are: letters, numbers, dots and underscore.
        
        RegExp Type, where the parameter value of the granted right has to match a given RegExp.
        Definition must be a valid RegExp between two Slashes (/) and without flags.
        Note: Colons are not allowed.
        
        Xyna Type, shortcut RegExp for "/^[a-zA-Z0-9_.]*\\*?$/"`
    }
];
