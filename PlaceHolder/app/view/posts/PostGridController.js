Ext.define('PlaceHolder.view.posts.PostGridController', {
    //! extend: Ext.app.ViewController
    extend: 'Ext.app.ViewController',
    //! controller.controllername
    alias: 'controller.postgridcontroller',

    onAddNewPost: function () {
        //1.
        // Ext.create('PlaceHolder.view.main.PostForm');
        this.showForm(null);


    },
    onAddPostMouseOver: function () {
        console.log("Mouse over");

    },

    onViewDetails: function () {
        //* get selected record from the grid
        let selectedGridid = 12;
        //
        this.showForm(selectedGridid);

    },
    //! refactor logic
    showForm: function (postId) {
        console.log(postId);
        Ext.create({
            xtype: 'postform' //symbolic name
        });
        //load form details using the id
    }

});