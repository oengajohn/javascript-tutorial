Ext.define('PlaceHolder.view.users.UserFormWithHboxAndVBox', {
    extend: 'Ext.window.Window',
    xtype: 'userformwithhboxandvbox',
    controller: 'userformwindowcontroller',
    autoShow: true,
    width: 700,
    modal: true,
    height: 600,
    layout: 'fit',
    bodyPadding: 10,
    items: [{
        xtype: 'form',
        scrollable: true,
        //defaults the configs 
        defaults: {
            anchor: '98%'
        },
        items: [{
                xtype: 'fieldcontainer',
                layout: 'hbox',
                defaults: {
                    flex: 1,
                    margin: '5, 5, 5, 5',
                },

                items: [{
                        xtype: 'textfield',
                        emptyText: 'First',
                        name: 'firstName',

                    },
                    {
                        xtype: 'textfield',
                        name: 'lastname',
                        emptyText: 'Last',

                    },
                ]
            },
            {
                xtype: 'fieldcontainer',
                layout: 'hbox',
                defaults: {
                    flex: 1,
                    margin: '5, 5, 5, 5',
                },

                items: [{
                        xtype: 'textfield',
                        emptyText: 'Age',
                        name: 'age',
                    },
                    {
                        xtype: 'textfield',
                        name: 'email',
                        emptyText: 'Email',
                    },
                ]
            }
        ],
        buttons: [{
                xtype: 'button',
                text: 'Reset',
                handler: 'onFormReset'
            },
            {
                xtype: 'button',
                text: 'Save',
                handler: 'onFormSave'
            },

        ]
    }]
});