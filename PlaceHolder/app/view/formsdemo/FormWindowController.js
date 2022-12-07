Ext.define('PlaceHolder.view.formsdemo.FormWindowController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.formwindowcontroller',
    /**
     * Called when the view is created
     */
    mixins: [

    ],
    init: function () {

    },
    onReset: function () {
        let references = this.getReferences(); //array of references
        let form = references['form'].getForm(); // get the form
        form.reset(); //reset the form
    },
    onSave: function () {
        let references = this.getReferences(); //array of references
        let form = references['form'].getForm();
        console.log(form.getFieldValues());


    },
    onCheckBoxChange: function (checkbox, newValue, oldValue, eOpts) {
        console.dir(eOpts)
        alert(` Changed from ${oldValue} => ${newValue}`);
    }

});