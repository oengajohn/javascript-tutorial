Ext.define('PlaceHolder.view.posts.PostGrid', {
    extend: 'Ext.grid.GridPanel',
    xtype: 'postgrid',
    store: {
        type: 'posts',
    },
    // selModel: {
    //     type: 'checkboxmodel', //rowmodel->default, cellmodel,dataviewmodel
    //     mode: 'SINGLE' //MULTI->default

    // },
    // features: [{
    //         ftype: 'grouping',
    //         startCollapsed: true,
    //         groupHeaderTpl: '{columnName}: {name} ({rows.length} Post{[values.rows.length > 1 ? "s" : ""]})'
    //     },

    // ],

    selModel: 'checkboxmodel', ///alternative specifying the selection model
    columns: [{
            xtype: 'rownumberer'
        },

        {
            text: 'User ID', //* displayable label of the column
            dataIndex: 'userId',
        },
        {
            text: 'Post ID', //* displayable label of the column
            dataIndex: 'id'
        },
        {
            text: 'Title', //* displayable label of the column
            dataIndex: 'title',
            flex: 1,
            hideable: false,
            sortable: false
        },
        {
            text: 'Body', //* displayable label of the column
            dataIndex: 'body',
            flex: 3,
            hidden: true
        },

    ],
    bbar: {
        xtype: 'pagingtoolbar',
        displayInfo: true,
        displayMsg: 'Display posts {0} - {1} of {2}',
        emptyMsg: 'No post to display',
    },



});