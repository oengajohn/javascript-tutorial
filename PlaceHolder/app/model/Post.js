Ext.define('PlaceHolder.model.Post', {
    extend: 'Ext.data.Model',
    idProperty: '_id',
    fields: [{
            name: 'userId',
            type: 'integer'
        },
        {
            name: '_id',
            type: 'integer'
        },
        {
            name: 'title',
            type: 'string'
        },
        {
            name: 'body',
            type: 'string'
        },
    ],
});