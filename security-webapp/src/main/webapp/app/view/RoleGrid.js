/*
 * File: app/view/RoleGrid.js
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

Ext.define('Security.view.RoleGrid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.rolegrid',

    title: '角色列表',
    columnLines: true,
    store: 'Role',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            dockedItems: [
                {
                    xtype: 'pagingtoolbar',
                    dock: 'bottom',
                    displayInfo: true,
                    store: 'Role'
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
                            xtype: 'button',
                            text: '删除',
                            tooltip: '删除'
                        },
                        {
                            xtype: 'tbseparator'
                        },
                        {
                            xtype: 'button',
                            text: '角色授权'
                        }
                    ]
                }
            ],
            selModel: Ext.create('Ext.selection.CheckboxModel', {
                mode: 'SINGLE'
            }),
            columns: [
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'name',
                    text: '名称'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'code',
                    text: '代码'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'description',
                    text: '描述',
                    flex: 1
                }
            ]
        });

        me.processRoleGrid(me);
        me.callParent(arguments);
    },

    processRoleGrid: function(config) {
        if (config.removeDockedItems) {
            config.selModel = Ext.create('Ext.selection.CheckboxModel');

            config.dockedItems = [{
                xtype: 'toolbar',
                items: [{
                    text: '添加',
                    tooltip: '添加'
                },{
                    text: '删除',
                    tooltip: '删除'
                }]
            }];

        }

        if (config.newStore) {
            config.store = Ext.create('Security.store.Role', {
                storeId: 'RoleStore',
                autoLoad: false,
                proxy: {
                    type: 'rest',
                    url: 'roles/findByUserId',
                    reader: {
                        type: 'json',
                        root: 'content',
                        totalProperty: 'totalElements'
                    }
                }
            });
        }
    }

});