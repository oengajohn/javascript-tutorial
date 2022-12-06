Ext.define('PlaceHolder.store.Posts', {
    extend: 'Ext.data.Store',
    alias: 'store.posts',
    storeId: 'posts',
    model: 'PlaceHolder.model.Post',
    proxy: {
        type: 'rest',
        url: 'http://localhost:3000/posts',
        reader: {
            type: 'json',
            totalProperty: 'totalCount', //
            rootProperty: 'rows'

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