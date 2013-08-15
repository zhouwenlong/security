/*
 * File: app/view/OrgaWin.js
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

Ext.define('Security.view.OrgaWin', {
    extend: 'Ext.window.Window',
    alias: 'widget.orgawin',

    height: 329,
    width: 352,
    layout: {
        type: 'fit'
    },
    constrainHeader: true,
    title: '组织机构',
    modal: true,

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'form',
                    bodyPadding: 10,
                    fieldDefaults: {
                        labelWidth: 65
                    },
                    items: [
                        {
                            xtype: 'hiddenfield',
                            name: 'id'
                        },
                        {
                            xtype: 'textfield',
                            anchor: '100%',
                            fieldLabel: '名称',
                            name: 'text',
                            allowBlank: false
                        },
                        {
                            xtype: 'textfield',
                            anchor: '100%',
                            fieldLabel: '代码',
                            name: 'code',
                            allowBlank: false
                        },
                        {
                            xtype: 'textfield',
                            anchor: '100%',
                            fieldLabel: '区域代码',
                            name: 'districtCode'
                        },
                        {
                            xtype: 'combobox',
                            anchor: '100%',
                            fieldLabel: '组织类型',
                            name: 'orgaType',
                            allowBlank: false,
                            editable: false,
                            forceSelection: true,
                            queryMode: 'local',
                            store: [
                                '省级机构',
                                '市级机构',
                                '县级机构',
                                '部门'
                            ]
                        },
                        {
                            xtype: 'textfield',
                            anchor: '100%',
                            fieldLabel: '地址',
                            name: 'address'
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
                            handler: function(button, event) {
                                this.up('window').close();
                            },
                            text: '关闭'
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});