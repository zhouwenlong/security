/*
 * File: app/view/UserGridPanel.js
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

Ext.define('Security.view.UserGridPanel', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.usergrid',

    closable: true,
    title: '用户列表',
    columnLines: true,
    store: 'User',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            columns: [
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'username',
                    text: '用户名'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'loginName',
                    text: '登录名'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'password',
                    text: '密码'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'sex',
                    text: '性别'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'userCard',
                    text: '用户证号'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'phone',
                    text: '电话'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'fax',
                    text: '传真'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'orga',
                    text: '所属组织',
                    flex: 1
                }
            ],
            dockedItems: [
                {
                    xtype: 'pagingtoolbar',
                    dock: 'bottom',
                    displayInfo: true,
                    store: 'User'
                },
                {
                    xtype: 'toolbar',
                    dock: 'top',
                    items: [
                        {
                            xtype: 'button',
                            text: '查询',
                            tooltip: '查询'
                        },
                        {
                            xtype: 'tbseparator'
                        },
                        {
                            xtype: 'button',
                            text: '添加',
                            tooltip: '添加'
                        },
                        {
                            xtype: 'button',
                            text: '编辑',
                            tooltip: '编辑'
                        },
                        {
                            xtype: 'tbseparator'
                        },
                        {
                            xtype: 'button',
                            text: '删除',
                            tooltip: '删除'
                        }
                    ]
                }
            ],
            selModel: Ext.create('Ext.selection.CheckboxModel', {
                mode: 'SINGLE'
            })
        });

        me.processUserGridPanel(me);
        me.callParent(arguments);
    },

    processUserGridPanel: function(config) {
        if (config.removeDockedItems) {
            config.dockedItems = [];
        }

    }

});