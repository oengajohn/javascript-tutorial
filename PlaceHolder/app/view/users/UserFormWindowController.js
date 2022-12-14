Ext.define('PlaceHolder.view.users.UserFormWindowController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.userformwindowcontroller',

    init: function () {

    },
    onFormReset: function (btn, e, eOpts) {
        let me = this;
        console.dir(me) //refering to the controller
        //get the view
        let window = me.getView(); // => Window xtype=>userformwindow
        console.dir(window);
        let form = Ext.getCmp('userform').getForm(); //getting by id
        let formByButtton = btn.up('form').getForm(); // getting by parent 
        let references = me.getReferences(); // gets all the references of the view
        let formByReference = references['myformreference'].getForm(); // by reference
        let formBylookupReference = window.lookupReference('myformreference').getForm();

        formByReference.reset();

    },
    onFormSave: function () {
        let me = this;
        let references = me.getReferences();
        let form = references['myformreference'].getForm();
        if (form.isValid()) {
            form.submit({
                url: 'http://3.126.66.68:3000/users',
                method: 'POST',
                success: function (form, action) {
                    console.log("in success callback");
                    console.dir(action.result)
                },
                failure: function (form, action) {
                    console.log("in failure callback");
                    console.dir(action.result)
                },
            })
        }

    },
});