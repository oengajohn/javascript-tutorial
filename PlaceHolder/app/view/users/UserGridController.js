Ext.define('PlaceHolder.view.users.UserGridController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.usergridcontroller',

    init: function () {
        let me = this;
        let grid = me.getView();
        let store = grid.getStore();
        store.load({
            callback: function (records, operation, success) {
                // do something after the load finishes
                // alert(`${operation} ==> ${success}`)
            },
        })


    },
    onAddNewUser: function () {
        this.showForm(null);
    },
    onViewDetails: function () {
        let userId = 1;
        this.showForm(userId);
    },
    showForm: function (userId) {
        Ext.create({
            xtype: 'userformwindow'
        });
        //if userId is not null -> prefill the form with data
    },

    onAddNewUserWithColumns: function () {
        Ext.create({
            xtype: 'usermulticolumnwindowform',
        });
    },
    onAddNewUserWithVboxHbox: function () {
        Ext.create({
            xtype: 'userformwithhboxandvbox',
        });
    },
});