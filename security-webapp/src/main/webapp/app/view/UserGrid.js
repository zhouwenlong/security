/*
 * File: app/view/UserGrid.js
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

Ext.define('Security.view.UserGrid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.usergrid',

    title: '用户管理',
    columnLines: true,
    store: 'User',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            columns: [
                {
                    xtype: 'gridcolumn',
                    width: 110,
                    dataIndex: 'username',
                    text: '用户名'
                },
                {
                    xtype: 'gridcolumn',
                    width: 110,
                    dataIndex: 'loginName',
                    text: '登录名'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'sex',
                    text: '性别'
                },
                {
                    xtype: 'gridcolumn',
                    width: 110,
                    dataIndex: 'userCard',
                    text: '用户证号'
                },
                {
                    xtype: 'gridcolumn',
                    width: 110,
                    dataIndex: 'phone',
                    text: '电话'
                },
                {
                    xtype: 'gridcolumn',
                    width: 110,
                    dataIndex: 'fax',
                    text: '传真'
                },
                {
                    xtype: 'gridcolumn',
                    width: 100,
                    dataIndex: 'orgaText',
                    text: '所属组织',
                    flex: 1
                },
                {
                    xtype: 'actioncolumn',
                    width: 80,
                    align: 'center',
                    items: [
                        {
                            icon: 'images/edit.png',
                            tooltip: '编辑用户'
                        },
                        {
                            icon: 'images/delete.gif',
                            tooltip: '删除用户'
                        },
                        {
                            icon: 'images/edit.png',
                            tooltip: '修改密码'
                        }
                    ]
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
                        me.processMyTriggerField1({
                            xtype: 'triggerfield',
                            width: 220,
                            fieldLabel: '用户名',
                            labelWidth: 50,
                            emptyText: '请输入一个用户名！'
                        }),
                        {
                            xtype: 'tbseparator'
                        },
                        {
                            xtype: 'button',
                            text: '添加',
                            tooltip: '添加'
                        },
                        {
                            xtype: 'tbseparator'
                        },
                        {
                            xtype: 'button',
                            text: '用户授权',
                            tooltip: '用户授权'
                        }
                    ]
                }
            ],
            selModel: Ext.create('Ext.selection.CheckboxModel', {
                mode: 'SINGLE'
            })
        });

        me.processUserGrid(me);
        me.callParent(arguments);
    },

    processMyTriggerField1: function(config) {
        var store = Ext.StoreMgr.lookup('User'),
            filter = store.filters.get('search_username_like'),
            value = filter ? filter.value : '';

        config.xtype = 'searchfield';
        config.paramName = 'search_username_like';
        config.store = store;
        config.value = value;

        return config;
    },

    processUserGrid: function(config) {
        if (config.removeDockedItems) {
            config.dockedItems = null;
            config.columns.pop();
        }

    }

});