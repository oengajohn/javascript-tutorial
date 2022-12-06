Ext.define('PlaceHolder.view.posts.PostGridController', {
    //! extend: Ext.app.ViewController
    extend: 'Ext.app.ViewController',
    //! controller.controllername
    alias: 'controller.postgridcontroller',

    onAddNewPost: function () {
        console.log("Add post clicked");
    },
    onAddPostMouseOver: function () {

        console.log("Mouse over");

    },

    onViewDetails: function () {
        console.log("view  post details clicked");
    }

});