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
    onAddNewUser: function () {}
});