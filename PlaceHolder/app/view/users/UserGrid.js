Ext.define('PlaceHolder.view.users.UserGrid', {
    extend: 'Ext.grid.GridPanel',
    //alias: ['widget.usergrid', 'widget.users'],//
    xtype: 'usergrid',
    controller: 'usergridcontroller',
    //store
    store: {
        type: 'users'
    },
    //columns
    columns: [{
            dataIndex: "_id",
            text: 'ID'
        },
        {
            dataIndex: "name",
            text: 'name'
        },
        {
            dataIndex: "username",
            text: 'Username'
        },
        {
            dataIndex: "email",
            text: 'Email'
        },
        {
            dataIndex: "street",
            text: 'Street'
        },
        {
            dataIndex: "suite",
            text: 'Suite'
        },
        {
            dataIndex: "city",
            text: 'City'
        },
        {
            dataIndex: "zipcode",
            text: 'Zip Code'
        },
        {
            dataIndex: "lat",
            text: 'Latitude'
        },
        {
            dataIndex: "lng",
            text: 'Longitude'
        },
        {
            dataIndex: "phone",
            text: 'Phone'
        },
        {
            dataIndex: "website",
            text: 'Website'
        },
        {
            dataIndex: "companyName",
            text: 'Company Name'
        },
        {
            dataIndex: "companyCatchPhrase",
            text: 'Catch Phrase'
        },
        {
            dataIndex: "companyBs",
            text: 'Business'
        },
        {
            dataIndex: "address",
            text: 'Address'
        },
    ],
    selModel: {
        type: 'checkboxmodel',
        mode: 'MULTI' //SINGLE
    },
    loadmask: true,
    bbar: {
        xtype: 'pagingtoolbar',
        displayInfo: true,
        displayMsg: 'Display records {0} - {1} of {2}',
        emptyMsg: 'No Record to display',
    },
    tbar: [{
        text: 'Add new User',
        iconCls: 'x-fa fa-plus',
        handler: 'onAddNewUser'
    }]
});