/*
 * File: app/view/RoleRescWin.js
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

Ext.define('Security.view.RoleRescWin', {
    extend: 'Ext.window.Window',
    alias: 'widget.rolerescwin',

    requires: [
        'Security.view.RescTree'
    ],

    height: 408,
    width: 305,
    layout: {
        type: 'fit'
    },
    closeAction: 'hide',
    constrainHeader: true,
    title: '角色授权',
    modal: true,

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'resctree',
                    checkedTree: true,
                    preventHeader: true
                }
            ],
            dockedItems: [
                {
                    xtype: 'toolbar',
                    dock: 'bottom',
                    items: [
                        {
                            xtype: 'button',
                            text: '确定'
                        },
                        {
                            xtype: 'button',
                            handler: function(button, event) {
                                button.up('window').hide();
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