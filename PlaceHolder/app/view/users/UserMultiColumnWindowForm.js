Ext.define('PlaceHolder.view.users.UserMultiColumnWindowForm', {
    extend: 'Ext.window.Window',
    xtype: 'usermulticolumnwindowform',
    controller: 'userformwindowcontroller',
    autoShow: true,
    width: 1100,
    modal: true,
    // draggable: false,
    height: 600,
    layout: 'fit',
    bodyPadding: 10,
    margin: '12px',
    items: [{
            xtype: 'form',
            scrollable: true,
            //defaults the configs 
            defaults: {
                anchor: '98%'
            },
            layout: 'column',

            items: [{
                    xtype: 'container',
                    layout: 'anchor',
                    margin: '12px',
                    columnWidth: 0.5,
                    items: [{
                            xtype: 'fieldset',
                            title: 'Basic Info',
                            defaults: {
                                anchor: '98%'
                            },
                            items: [{
                                    xtype: 'numberfield',
                                    fieldLabel: 'User ID',
                                    name: '_id',

                                },
                                {
                                    xtype: 'textfield',
                                    fieldLabel: 'Name',
                                    name: 'name'
                                },
                                {
                                    xtype: 'textfield',
                                    fieldLabel: 'Username',
                                    name: 'username'
                                },
                                {
                                    xtype: 'textfield',
                                    fieldLabel: 'Email',
                                    name: 'email'
                                },

                            ]
                        },
                        //start of the address
                        {
                            xtype: 'fieldset',
                            title: 'Address information',
                            defaults: {
                                anchor: '98%',
                            },
                            items: [{
                                    xtype: 'textfield',
                                    fieldLabel: 'Street',
                                    name: 'street'
                                },
                                {
                                    xtype: 'textfield',
                                    fieldLabel: 'Suite',
                                    name: 'suite'
                                },
                                {
                                    xtype: 'textfield',
                                    fieldLabel: 'City',
                                    name: 'city'
                                },
                                {
                                    xtype: 'textfield',
                                    fieldLabel: 'Zipcode',
                                    name: 'zipcode'
                                },
                                {
                                    xtype: 'fieldcontainer',
                                    fieldLabel: 'Geo Coordinates',
                                    layout: 'hbox',

                                    defaults: {
                                        flex: 1,
                                    },
                                    items: [{
                                            xtype: 'textfield',
                                            name: 'lat'
                                        },
                                        {
                                            xtype: 'textfield',
                                            name: 'lng'
                                        },
                                    ]
                                }

                            ]
                        },

                    ]
                },
                {
                    xtype: 'container',
                    columnWidth: 0.5,
                    margin: '12px',
                    layout: 'anchor',
                    items: [ //end of adress
                        {
                            xtype: 'fieldset',
                            title: 'Contact Information',
                            defaults: {
                                anchor: '98%'
                            },
                            items: [{
                                    xtype: 'textfield',
                                    fieldLabel: 'Phone',
                                    name: 'phone'
                                },
                                {
                                    xtype: 'textfield',
                                    fieldLabel: 'Website',
                                    name: 'website'
                                },

                            ]

                        },

                        {
                            xtype: 'fieldset',
                            title: 'Company Information',
                            defaults: {
                                anchor: '98%'
                            },
                            items: [{
                                    xtype: 'textfield',
                                    fieldLabel: 'Company Name',
                                    name: 'companyName'
                                },
                                {
                                    xtype: 'textfield',
                                    fieldLabel: 'Catch Phrase',
                                    name: 'companyCatchPhrase'
                                },
                                {
                                    xtype: 'textfield',
                                    fieldLabel: 'Business',
                                    name: 'companyBs'
                                },

                            ]
                        }

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
        }

    ]
});