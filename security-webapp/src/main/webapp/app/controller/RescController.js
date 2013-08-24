/*
 * File: app/controller/RescController.js
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

Ext.define('Security.controller.RescController', {
    extend: 'Ext.app.Controller',

    models: [
        'Resc'
    ],
    stores: [
        'Resc'
    ],
    views: [
        'RescTree',
        'RescWin'
    ],

    refs: [
        {
            ref: 'rescWin',
            selector: 'rescwin'
        },
        {
            ref: 'rescTree',
            selector: 'tabpanel > resctree'
        }
    ],

    onTreepanelItemContextMenu: function(dataview, record, item, index, e, eOpts) {
        e.stopEvent();
        var treeMenu = Ext.create('Ext.menu.Menu',{
            items: [{
                text: '添加',
                handler: function(button) {
                    var rescWin = Ext.create('Security.view.RescWin'),
                        form = rescWin.child('form');

                    if (record.isExpandable()) {
                        record.expand();
                    }

                    form.loadRecord(Ext.create('Security.model.Resc', {
                        parent: {id: record.get('id')}
                    }));
                    rescWin.show(button);
                }
            }, {
                xtype: 'menuseparator'
            }, {
                text: '编辑',
                handler: function(button) {            
                    var rescWin = Ext.create('Security.view.RescWin'),
                        form = rescWin.child('form');

                    if (record.isExpandable()) {
                        record.expand();
                    }

                    record.set('parent', {id: record.get('parentId')});

                    form.getForm().findField('code').readOnly = true;
                    form.loadRecord(record);
                    rescWin.show(button);
                }
            }, {
                text: '删除',
                handler: function(button) {
                    if (record.isLeaf()) {
                        Ext.create('Security.model.Resc', {
                            id: record.get('id')
                        }).destroy({
                            success: function() {
                                record.remove();
                            }
                        });
                    }
                } 
            }]
        });
        treeMenu.showAt(e.xy);
    },

    saveResc: function(button, e, eOpts) {
        var win = this.getRescWin(),
            form = win.child('form'),
            resc = form.getRecord(),
            selectedNode = this.getRescTree().getSelectionModel().getLastSelected();

        if (form.isValid()) {

            var codeField = form.getForm().findField('code');

            if (!codeField.readOnly) {
                Ext.Ajax.request({
                    url: 'rescs/isPropertyUnique',
                    method: 'GET',
                    params: {
                        propertyName: 'code',
                        value: codeField.getValue()
                    },
                    success: function(response, opts) {
                        var o = Ext.decode(response.responseText);
                        if (!o.unique) {
                            codeField.markInvalid('系统资源名称已存在！');
                            return;
                        }
                        doSave();
                    }
                });
            } else {
                doSave();   
            }
        }

        function doSave() {
            resc.set(form.getValues());
            resc.save({
                success: function(resource) {
                    if (resource.get('id') != selectedNode.get('id')) {
                        if (selectedNode.isLeaf()) {                    
                            selectedNode.set('expandable', true);
                            selectedNode.set('leaf', false);
                            selectedNode.appendChild(resource);
                            selectedNode.expand();
                        } else {
                            selectedNode.appendChild(resource);
                        }
                    }
                    win.close();
                }
            });
        }
    },

    init: function(application) {
        this.control({
            "resctree": {
                itemcontextmenu: this.onTreepanelItemContextMenu
            },
            "rescwin button[text='保存']": {
                click: this.saveResc
            }
        });
    }

});
