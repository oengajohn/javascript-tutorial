Ext.define('PlaceHolder.store.Posts', {
    extend: 'Ext.data.Store',
    alias: 'store.posts',
    storeId: 'posts',
    model: 'PlaceHolder.model.Post',
    proxy: {
        type: 'rest',
        url: 'https://jsonplaceholder.typicode.com/posts',
        reader: {
            type: 'json',

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