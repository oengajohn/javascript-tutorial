//appName.folderName.className
// classname,configOBj,callback

Ext.define('PlaceHolder.view.todos.TodoGrid', {
    //extend
    extend: 'Ext.grid.Panel',

    // xtype name to make use when instantiating this view
    xtype: 'todogrid',

    //! mandatory
    // ! store
    store: {
        //? Todo -> todos
        type: 'todos'
    },

    // ! columns
    columns: [

        /*
        {
            "userId": 1,
            "id": 1,
            "title": "delectus aut autem",
            "completed": false
        }*/

        {
            text: 'User ID', //* displayable label of the column
            dataIndex: 'userId'
        },
        {
            text: 'Todo ID', //* displayable label of the column
            dataIndex: 'id'
        },
        {
            text: 'Title', //* displayable label of the column
            dataIndex: 'title'
        },
        {
            text: 'Completed', //* displayable label of the column
            dataIndex: 'completed'
        },
    ]

})