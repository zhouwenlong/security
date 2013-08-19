/*
 * File: app/controller/RoleController.js
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

Ext.define('Security.controller.RoleController', {
    extend: 'Ext.app.Controller',

    models: [
        'Role',
        'Resc'
    ],
    stores: [
        'Role',
        'Resc'
    ],
    views: [
        'RoleWin',
        'RoleRescWin',
        'RoleRescPanel'
    ],

    refs: [
        {
            ref: 'roleGrid',
            selector: 'rolerescpanel > rolegrid'
        },
        {
            ref: 'roleWin',
            selector: 'rolewin'
        },
        {
            ref: 'roleRescWin',
            selector: 'rolerescwin'
        }
    ],

    deleteRole: function(button, e, eOpts) {
        var selModel = this.getRoleGrid().getSelectionModel(),
            roleStore = this.getRoleStore();

        if (selModel.hasSelection()) {
            Ext.Msg.confirm('确认', '您确定要删除吗?', function(buttonId) {
                if (buttonId == 'yes') {
                    var record = selModel.getLastSelected();
                    Ext.create('Security.model.Role', {
                        id: record.get('id')
                    }).destroy({
                        success: function() {
                            roleStore.reload();
                        }
                    });
                }
            });
        }
    },

    roleRescMgr: function(button, e, eOpts) {
        var roleGrid = this.getRoleGrid(),
            sm = roleGrid.getSelectionModel();

        if (sm.hasSelection()) {

            var win = Ext.widget('rolerescwin'),
                tree = win.child('resctree'),
                roleId = sm.getLastSelected().get('id');

            tree.expandAll();

            Ext.Ajax.request({
                url: 'rescs/findByRoleId',
                method: 'GET',
                params: {roleId: roleId},
                success: function(response, opts) {
                    var rescs = Ext.decode(response.responseText),
                        rescIds = [];

                    Ext.each(rescs, function(resc) {
                        rescIds.push(resc.id);
                    });

                    win.show(button, function() {
                        tree.getRootNode().cascadeBy(function(node) {
                            if (Ext.Array.contains(rescIds, node.get('id'))) {
                                node.set('checked', true);
                            } else {
                                node.set('checked', false);
                            }
                        });
                    });
                }
            });
        }
    },

    maintainRoleResc: function(button, e, eOpts) {
        var sm = this.getRoleGrid().getSelectionModel(),
            roleId = sm.getLastSelected().get('id'),
            win = this.getRoleRescWin(),
            tree = win.child('resctree'),
            checkedNodes = tree.getChecked(),
            rescIds = [];

        Ext.each(checkedNodes, function(node) {
            rescIds.push(node.get('id'));
        });

        Ext.Ajax.request({
            url: 'roles/maintainRoleResc',
            method: 'POST',
            params: {
                roleId: roleId,
                rescIds: rescIds
            },
            success: function(response, opts) {
                var tree = Ext.ComponentQuery.query('rolerescpanel > resctree').pop();
                tree.expandAll();
                tree.getRootNode().cascadeBy(function(node) {
                    if (Ext.Array.contains(rescIds, node.get('id'))) {
                        node.set('checked', true);
                    } else {
                        node.set('checked', false);
                    }
                });
                win.close();
            }
        });
    },

    onGridpanelSelectionChange: function(model, selected, eOpts) {
        if (selected.length) {
            var roleId = selected[0].get('id');

            Ext.Ajax.request({
                url: 'rescs/findByRoleId',
                method: 'GET',
                params: {roleId: roleId},
                success: function(response, opts) {
                    var rescs = Ext.decode(response.responseText),
                        rescIds = [];

                    Ext.each(rescs, function(resc) {
                        rescIds.push(resc.id);
                    });

                    var tree = Ext.ComponentQuery.query('rolerescpanel > resctree').pop();
                    tree.getRootNode().cascadeBy(function(node) {
                        if (Ext.Array.contains(rescIds, node.get('id'))) {
                            node.set('checked', true);
                        } else {
                            node.set('checked', false);
                        }
                    });
                }
            });
        }
    },

    addRole: function(button, e, eOpts) {
        Ext.widget('rolewin').show(button);
    },

    saveRole: function(button, e, eOpts) {
        var roleWin = this.getRoleWin(),
            roleGrid = this.getRoleGrid(),
            form = roleWin.child('form');

        if (form.isValid()) {
            Ext.create('Security.model.Role', form.getValues()).save({
                success: function() {
                    roleGrid.getSelectionModel().deselectAll();
                    roleGrid.getStore().reload();
                    roleWin.close();
                }
            });
        }


    },

    onRescTreeCheckChange: function(node, checked, eOpts) {
        node.cascadeBy(function (child) {  
            child.set("checked", checked);
        });
    },

    editRole: function(button, e, eOpts) {
        var roleWin = Ext.widget('rolewin'),
            roleGrid = this.getRoleGrid(),
            selModel = roleGrid.getSelectionModel();

        if (selModel.hasSelection()) {

            var record = selModel.getLastSelected(),
                form = roleWin.child('form');

            form.loadRecord(record);
            roleWin.show(button);
        }

    },

    init: function(application) {
        this.control({
            "rolerescpanel > rolegrid button[text='删除']": {
                click: this.deleteRole
            },
            "rolerescpanel > rolegrid button[text='角色授权']": {
                click: this.roleRescMgr
            },
            "rolerescwin button[text='确定']": {
                click: this.maintainRoleResc
            },
            "rolerescpanel > rolegrid": {
                selectionchange: this.onGridpanelSelectionChange
            },
            "rolerescpanel > rolegrid button[text='添加']": {
                click: this.addRole
            },
            "rolewin button[text='保存']": {
                click: this.saveRole
            },
            "rolerescwin > resctree": {
                checkchange: this.onRescTreeCheckChange
            },
            "rolerescpanel > rolegrid button[text='编辑']": {
                click: this.editRole
            }
        });
    }

});
