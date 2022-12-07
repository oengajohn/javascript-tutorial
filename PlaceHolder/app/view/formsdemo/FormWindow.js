Ext.define('PlaceHolder.view.formsdemo.FormWindow', {
    extend: 'Ext.window.Window',
    xtype: 'formwindow',
    controller: 'formwindowcontroller',
    autoShow: true,
    modal: true,
    width: 600,
    maximizable: true,
    layout: 'fit',
    items: [{
            xtype: 'form',
            reference: 'form',
            items: [{
                    name: 'completed',
                    fieldLabel: 'Completed',
                    xtype: 'checkbox',
                    inputValue: 'YES',
                    checked: true,
                    listeners: {
                        change: 'onCheckBoxChange',
                    }
                },
                {
                    xtype: 'datefield',
                    fieldLabel: 'DOB',
                    name: 'dob',
                    maxValue: new Date(), //barrier future date
                    allowBlank: false //make it require
                }

            ],
            buttons: [{
                    text: 'Reset',
                    handler: 'onReset'
                },
                {
                    text: 'Save',
                    handler: 'onSave'
                }
            ]
        },

    ]
});