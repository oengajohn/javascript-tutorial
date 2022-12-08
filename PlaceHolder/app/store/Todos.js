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
        type: 'rest',
        url: 'http://3.126.66.68:3000/todos',
        // headers: {
        //     "My Custom Header": new Date()
        // },
        reader: {
            type: 'json',
            totalProperty: 'totalCount', //define the key holding the total count
            rootProperty: 'rows' //key containing the array data

        }
    },
    //* initiate the request to get data automaticall on application load
    autoLoad: true





});