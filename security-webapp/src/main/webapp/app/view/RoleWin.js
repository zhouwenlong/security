/*
 * File: app/view/RoleWin.js
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

Ext.define('Security.view.RoleWin', {
    extend: 'Ext.window.Window',
    alias: 'widget.rolewin',

    width: 350,
    constrain: true,
    layout: {
        type: 'fit'
    },
    constrainHeader: true,
    title: '角色信息',
    modal: true,

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'form',
                    defaults: {
                        allowBlank: false
                    },
                    bodyPadding: 10,
                    fieldDefaults: {
                        labelWidth: 60
                    },
                    items: [
                        {
                            xtype: 'textfield',
                            anchor: '100%',
                            fieldLabel: '名称',
                            name: 'name'
                        },
                        {
                            xtype: 'textfield',
                            anchor: '100%',
                            fieldLabel: '代码',
                            name: 'code'
                        },
                        {
                            xtype: 'textareafield',
                            anchor: '100%',
                            fieldLabel: '描述',
                            name: 'description'
                        }
                    ]
                }
            ],
            dockedItems: [
                {
                    xtype: 'toolbar',
                    dock: 'bottom',
                    items: [
                        {
                            xtype: 'button',
                            text: '保存'
                        },
                        {
                            xtype: 'button',
                            text: '关闭'
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});