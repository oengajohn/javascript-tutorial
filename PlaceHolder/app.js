/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'PlaceHolder.Application',

    name: 'PlaceHolder',

    requires: [
        // This will automatically load all classes in the PlaceHolder namespace
        // so that application classes do not need to require each other.
        'PlaceHolder.*'
    ],

    // The name of the initial view to create.
    mainView: 'PlaceHolder.view.main.MainView'
});