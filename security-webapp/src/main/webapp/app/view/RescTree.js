/*
 * File: app/view/RescTree.js
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

Ext.define('Security.view.RescTree', {
    extend: 'Ext.tree.Panel',
    alias: 'widget.resctree',

    autoScroll: true,
    bodyPadding: 5,
    title: '系统资源管理',
    store: 'Resc',
    rootVisible: false,
    useArrows: true,

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            tools: [
                {
                    xtype: 'tool',
                    handler: function(event, toolEl, owner, tool) {
                        owner.up('treepanel').getRootNode().expandChildren();
                    },
                    type: 'refresh'
                },
                {
                    xtype: 'tool',
                    handler: function(event, toolEl, owner, tool) {
                        owner.up('treepanel').expandAll();
                    },
                    tooltip: '全部展开',
                    type: 'maximize'
                },
                {
                    xtype: 'tool',
                    handler: function(event, toolEl, owner, tool) {
                        owner.up('treepanel').collapseAll();
                    },
                    tooltip: '全部收缩',
                    type: 'minimize'
                }
            ],
            listeners: {
                afterrender: {
                    fn: me.onTreepanelAfterRender,
                    scope: me
                },
                checkchange: {
                    fn: me.onTreepanelCheckChange,
                    scope: me
                }
            }
        });

        me.processRescTree(me);
        me.callParent(arguments);
    },

    processRescTree: function(config) {
        if (config.checkedTree) {
            config.store = Ext.create('Security.store.Resc', {
                proxy: {
                    type: 'ajax',
                    extraParams: {checkedTree: true},
                    url: 'rescs/findByParentId'
                }
            });
            return;
        }
        config.store = Ext.create('Security.store.Resc');
    },

    onTreepanelAfterRender: function(component, eOpts) {
        this.expandAll();
    },

    onTreepanelCheckChange: function(node, checked, eOpts) {
        node.cascadeBy(function (child) {  
            child.set('checked', checked);
        });
    }

});