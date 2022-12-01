//appName.folderName.className
// classname,configOBj,callback

Ext.define('PlaceHolder.store.Todos', {

    //extentions to Ext.data.Store
    extend: 'Ext.data.Store',

    //! alias -> store.storename

    alias: 'store.todos',

    //! fields => refence to the model fields 

    //!model 
    model: 'PlaceHolder.model.Todo',

    //ajax request
    //! proxy

    proxy: {
        url: 'https://jsonplaceholder.typicode.com/todos/',
        type: 'rest',
        reader: {
            type: 'json',
            // rootProperty
        }
    },
    //* initiate the request to get data automaticall on application load
    autoLoad: true





});