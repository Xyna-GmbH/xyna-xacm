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


export const roles_translations_de_DE: I18nTranslation[] = [
    // RolesManagementComponent
    // html
    {
        key: 'xmcp.xacm.roles.header-roles',
        value: 'Rollen'
    },
    {
        key: 'xmcp.xacm.roles.button-clear-filters',
        value: 'Filter löschen'
    },
    {
        key: 'xmcp.xacm.roles.tooltip-refresh',
        value: 'Aktualisieren'
    },
    {
        key: 'xmcp.xacm.roles.tooltip-add',
        value: 'Hinzufügen'
    },
    {
        key: 'xmcp.xacm.roles.header-role-details',
        value: 'Rolle Details'
    },
    {
        key: 'xmcp.xacm.roles.tooltip-cancel',
        value: 'Abbrechen'
    },
    {
        key: 'xmcp.xacm.roles.aria-role-name',
        value: 'Rollenname'
    },
    {
        key: 'xmcp.xacm.roles.label-documentation',
        value: 'Dokumentation'
    },
    {
        key: 'xmcp.xacm.roles.header-granted-rights',
        value: 'Gewährte Rechte'
    },
    {
        key: 'xmcp.xacm.roles.tooltip-grant-new-right',
        value: 'Recht gewähren'
    },
    {
        key: 'xmcp.xacm.roles.button-revoke-rights',
        value: 'Rechte entziehen'
    },
    {
        key: 'xmcp.xacm.roles.button-cancel',
        value: 'Abbrechen'
    },
    {
        key: 'xmcp.xacm.roles.button-apply',
        value: 'Anwenden'
    },

    // typescript
    {
        key: 'xmcp.xacm.roles.question',
        value: 'Frage'
    },
    {
        key: 'xmcp.xacm.roles.delete',
        value: '%name% löschen?'
    },
    {
        key: 'xmcp.xacm.roles.edit',
        value: 'Bearbeiten'
    },
    {
        key: 'xmcp.xacm.roles.revoke',
        value: 'Entziehen'
    },
    {
        key: 'xmcp.xacm.roles.unknown-right-title',
        value: 'Unbekanntes Recht'
    },
    {
        key: 'xmcp.xacm.roles.unknown-right',
        value: 'Das verwendete Recht "%right%" existiert nicht. Soll es angelegt werden, um diese Rolle bearbeiten zu können?'
    },

    // TABLE COLUMNS
    {
        key: 'Role',
        value: 'Rolle'
    },
    {
        key: 'Domain',
        value: 'Domain'
    },
    {
        key: 'Documentation',
        value: 'Dokumentation'
    },
    {
        key: 'Right',
        value: 'Recht'
    },
    {
        key: 'Parameters',
        value: 'Parameter Signatur'
    },

    // RightParameter validation errors translations
    {
        key: 'PARAMETER TYPE WAS NOT IDENTIFIED',
        value: 'PARAMETER TYP WURDE NICHT ERKANNT'
    },
    {
        key: 'NOT COMMA SEPARATED LIST OF VALID OPTIONS',
        value: 'KEINE KOMMA-GETRENNTE LISTE VALIDER OPTIONEN'
    },
    {
        key: 'AT LEAST 1 VALID OPTION REQUIRED',
        value: 'MINDESTENS 1 VALIDE OPTION BENÖTIGT'
    },
    {
        key: 'NOT A VALID REGEXP',
        value: 'KEIN VALIDER REGEXP'
    },
    {
        key: 'COLONS ARE NOT ALLOWED',
        value: 'DOPPELPUNKTE SIND NICHT ERLAUBT'
    },
    {
        key: 'VALUE MUST BE ONE OF %group%',
        value: 'WÄHLE WERT AUS %group%'
    }
];
