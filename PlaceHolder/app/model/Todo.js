Ext.define('PlaceHolder.model.Todo', {
    extend: 'Ext.data.Model',
    idProperty: '_id',
    //! fields
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
            name: 'completed',
            type: 'boolean'
        },
    ],

})