Ext.define('PlaceHolder.view.posts.PostFormController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.postformcontroller',

    onFormReset: function () {
        let references = this.getReferences(); //array of references
        let form = references['postdetailsform'].getForm(); // get the form
        form.reset(); //reset the form


    },
    onFormSave: function () {
        let references = this.getReferences(); //array of references
        let form = references['postdetailsform'].getForm(); // get the form
        form.submit({
            method: 'POST',
            url: 'http://localhost:3000/posts', //actual endpoint
            success: function (form, action) {
                alert("saved sucessfully" + action.result)
            },
            failure: function (form, action) {
                alert("saved sucessfully" + action.result)
            },

        });

    },


});