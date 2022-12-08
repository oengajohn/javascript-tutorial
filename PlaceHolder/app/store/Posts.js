Ext.define('PlaceHolder.store.Posts', {
    extend: 'Ext.data.Store',
    alias: 'store.posts',
    storeId: 'posts',
    model: 'PlaceHolder.model.Post',
    proxy: {
        type: 'rest',
        url: 'http://3.126.66.68:3000/posts',
        // headers: {
        //     "My Custom Header": new Date()
        // },
        reader: {
            type: 'json',
            totalProperty: 'totalCount', //define the key holding the total count
            rootProperty: 'rows' //key containing the array data

        }
    },
    autoLoad: true,
    sorters: [{
            property: 'userId',
            direction: 'ASC'
        },
        {
            property: 'id',
            direction: 'DESC'
        }
    ],
    groupField: 'userId',
    pageSize: 5
});