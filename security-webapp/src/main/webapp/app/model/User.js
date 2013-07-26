/*
 * File: app/model/User.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.2.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('Security.model.User', {
    extend: 'Ext.data.Model',

    fields: [
        {
            name: 'id'
        },
        {
            name: 'username'
        },
        {
            name: 'loginName'
        },
        {
            name: 'password'
        },
        {
            name: 'sex'
        },
        {
            name: 'userCard'
        },
        {
            name: 'phone'
        },
        {
            name: 'fax'
        },
        {
            mapping: 'orga.text',
            name: 'orga',
            persist: false
        }
    ],

    proxy: {
        type: 'rest',
        url: 'users',
        reader: {
            type: 'json',
            root: 'content',
            totalProperty: 'totalElements'
        }
    }
});