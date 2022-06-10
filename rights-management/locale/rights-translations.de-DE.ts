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


export const rights_translations_de_DE: I18nTranslation[] = [
    // RightsManagementComponent
    // html
    {
        key: 'xmcp.xacm.rights.header',
        value: 'Rechte'
    },
    {
        key: 'xmcp.xacm.rights.button-clear-filters',
        value: 'Filter löschen'
    },
    {
        key: 'xmcp.xacm.rights.tooltip-refresh',
        value: 'Aktualisieren'
    },
    {
        key: 'xmcp.xacm.rights.tooltip-add',
        value: 'Hinzufügen'
    },
    {
        key: 'xmcp.xacm.rights.header-right-details',
        value: 'Recht Details'
    },
    {
        key: 'xmcp.xacm.rights.tooltip-cancel',
        value: 'Abbrechen'
    },
    {
        key: 'xmcp.xacm.rights.aria-right',
        value: 'Recht'
    },
    {
        key: 'xmcp.xacm.rights.header-parameter-definition',
        value: 'Parameterdefinition'
    },
    {
        key: 'xmcp.xacm.rights.footer-0-parameters',
        value: '0 Parameter'
    },
    {
        key: 'xmcp.xacm.rights.label-documentation',
        value: 'Dokumentation'
    },
    {
        key: 'xmcp.xacm.rights.button-cancel',
        value: 'Abbrechen'
    },
    {
        key: 'xmcp.xacm.rights.button-apply',
        value: 'Anwenden'
    },

    // typescript
    {
        key: 'xmcp.xacm.rights.question',
        value: 'Frage'
    },
    {
        key: 'xmcp.xacm.rights.delete',
        value: '%name% löschen?'
    },

    // ParameterRichlistItemComponent
    // html
    {
        key: 'xmcp.xacm.rights.parameter-richlist-item.label-type',
        value: 'Typ'
    },
    {
        key: 'xmcp.xacm.rights.parameter-richlist-item.label-value',
        value: 'Wert'
    },
    {
        key: 'xmcp.xacm.rights.parameter-richlist-item.label-definition',
        value: 'Definition'
    },

    // TABLE COLUMNS
    {
        key: 'Right',
        value: 'Recht'
    },
    {
        key: 'Documentation',
        value: 'Dokumentation'
    },

    {
        key: 'NOT CORRECT FORMAT',
        value: 'NICHT IM KORREKTEN FORMAT'
    },

    // AddNewRightComponent
    {
        key: 'xmcp.xacm.rights.add-new-right.right-name-help',
        value: 'Der Name des Rechts muss ein durch Punkte getrennter Ausdruck sein, der mit kleinem Buchstaben beginnt, z.B. %exp1%. Er kann mit zusätzlichen Parametern versehen werden.'
    },
    {
        key: 'xmcp.xacm.rights.add-new-right.parameter-help-text',
        value:
            `Es gibt 3 verschiedene Typen von Parametern:

        Optionstyp, bei dem genau eine Option der gegebenen Optionen gewählt werden kann.
        Die Definition muss eine durch Komma getrennte Liste von gültigen Optionen sein.
        Gültige Option:
        Zeichenfolge größer als 1, die mit einem Buchstaben beginnt.
        Erlaubte Zeichen danach sind: Buchstaben, Zahlen, Punkte und Unterstriche.

        RegExp Typ, wobei der Parameterwert des gewährten Rechts mit einer gegebenen RegExp übereinstimmen muss.
        Die Definition muss eine gültige RegExp zwischen zwei Schrägstrichen (/) und ohne Flags sein.
        Hinweis: Doppelpunkte sind nicht zulässig.

        Xyna Typ, Abkürzung RegExp für "/^[a-zA-Z0-9_.]*\\*?$/".`
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
