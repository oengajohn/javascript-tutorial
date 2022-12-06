Ext.define('PlaceHolder.view.posts.PostForm', {
    extend: 'Ext.window.Window',
    xtype: 'postform',
    controller: 'postformcontroller',
    title: 'Add Post',
    width: 600,
    maximizable: true,
    modal: true,
    autoShow: true,
    layout: 'fit',
    //items of the window container
    items: [{
        xtype: 'form',
        layout: 'form',
        reference: 'postdetailsform',
        jsonSubmit: true,
        //items of the form container
        items: [{
                xtype: 'numberfield',
                name: 'userId',
                reference: 'userId',
                fieldLabel: 'User Id'
            },
            {
                xtype: 'numberfield',
                name: 'id',
                fieldLabel: 'Post Id'
            },
            {
                xtype: 'textfield',
                fieldLabel: 'Title',
                name: 'title'
            },
            {
                xtype: 'textfield',
                fieldLabel: 'Body',
                name: 'body'
            },

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