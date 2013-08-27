/*
 * File: app/controller/UserRoleRescController.js
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

Ext.define('Security.controller.UserRoleRescController', {
    extend: 'Ext.app.Controller',

    stores: [
        'User',
        'Role'
    ],
    views: [
        'RoleListWin',
        'UserRoleRescPanel'
    ],

    refs: [
        {
            ref: 'userGrid',
            selector: 'userrolerescpanel container > usergrid'
        },
        {
            ref: 'roleGrid',
            selector: 'userrolerescpanel container > rolegrid'
        },
        {
            ref: 'rescTree',
            selector: 'userrolerescpanel resctree'
        }
    ],

    userGridSelectionChange: function(model, selected, eOpts) {
        if (selected.length) {

            var userId = selected[0].get('id'),
                roleStore = this.getRoleGrid().getStore();

            roleStore.getProxy().url = 'roles/findByUserId';
            roleStore.getProxy().setExtraParam('userId', userId);

            roleStore.load();

            this.findRescIdsByUserId(userId);

        }
    },

    addRolesToUser: function(button, e, eOpts) {
        var userGrid = this.getUserGrid(),
            roleGrid = this.getRoleGrid(),
            roleListWin = Ext.ComponentQuery.query('rolelistwin').pop(),
            roleGrid2 = roleListWin.child('gridpanel'),
            userSm = userGrid.getSelectionModel(),
            roleSm = roleGrid2.getSelectionModel();

        if (roleSm.hasSelection()) {

            var userId = userSm.getLastSelected().get('id'),
                roles = roleSm.getSelection(),
                roleIds = [];


            Ext.each(roles, function(role) {
                roleIds.push(role.get('id'));
            });

            Ext.Ajax.request({
                url: 'users/addRolesToUser',
                params: {
                    userId : userId,
                    roleIds: roleIds
                },
                success: function(response, opts) {
                    roleListWin.close();
                    this.getRoleGrid().getStore().reload();

                    this.findRescIdsByUserId(userId);
                },
                scope: this
            });

        }
    },

    removeRolesFromUser: function(button, e, eOpts) {
        var userSm = this.getUserGrid().getSelectionModel(),
            roleSm = this.getRoleGrid().getSelectionModel();

        if (roleSm.hasSelection()) {

            var userId = userSm.getLastSelected().get('id'),
                roles = roleSm.getSelection(),
                roleIds = [];


            Ext.each(roles, function(role) {
                roleIds.push(role.get('id'));
            });

            Ext.Ajax.request({
                url: 'users/removeRolesFromUser',
                params: {
                    userId : userId,
                    roleIds: roleIds
                },
                success: function(response, opts) {
                    this.getRoleGrid().getStore().reload();
                    this.findRescIdsByUserId(userId);
                },
                scope: this
            });

        }
    },

    openRoleListWin: function(button, e, eOpts) {
        var sm = this.getUserGrid().getSelectionModel(),
            win = this.win;

        if (sm.hasSelection()) {
            if (!win) {
                win = Ext.widget('rolelistwin', {
                    animateTarget: button
                });
                this.win = win;
            }
            win.show();
        }
    },

    findRescIdsByUserId: function(userId) {
        Ext.Ajax.request({
            url: 'rescs/findByUserId',
            method: 'GET',
            params: {
                userId: userId
            },
            success: function(response, opts) {
                var rescIds = Ext.decode(response.responseText),
                    rootNode = this.getRescTree().getRootNode();

                rootNode.cascadeBy(function(node) {
                    if (Ext.Array.contains(rescIds, node.get('id'))) {
                        node.set('checked', true);
                    } else {
                        node.set('checked', false);
                    }
                });
            },
            scope: this
        });
    },

    init: function(application) {
        this.control({
            "userrolerescpanel usergrid": {
                selectionchange: this.userGridSelectionChange
            },
            "rolelistwin button[text='确定']": {
                click: this.addRolesToUser
            },
            "userrolerescpanel rolegrid button[text='删除']": {
                click: this.removeRolesFromUser
            },
            "userrolerescpanel rolegrid button[text='添加']": {
                click: this.openRoleListWin
            }
        });
    }

});
