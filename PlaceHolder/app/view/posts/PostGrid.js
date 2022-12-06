Ext.define('PlaceHolder.view.posts.PostGrid', {
    extend: 'Ext.grid.GridPanel',
    xtype: 'postgrid',
    //!define the controlling code
    controller: 'postgridcontroller',
    store: {
        type: 'posts',
    },
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
            dataIndex: '_id'
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
    //top Bar

    tbar: [

        {
            xtype: 'button',
            text: 'Add new Post',
            listeners: {
                //! eventname:'functionName in the controller
                click: 'onAddNewPost',
                mouseover: 'onAddPostMouseOver'
            }

        },
        {
            xtype: 'button',
            text: 'View Details',

            //* registering default event handlers => click
            handler: 'onViewDetails'


        },
        {
            xtype: 'button',
            text: 'Remove Selected',
            hidden: true

        },
        {
            xtype: 'textfield',
            emptyText: 'Search',

        },
        {
            xtype: 'tbfill'
        },
        {
            xtype: 'button',
            text: 'Third Last'
        },
        {
            xtype: 'button',
            text: 'Second Last'
        },
        {
            xtype: 'button',
            text: 'Last'
        }

    ]





});