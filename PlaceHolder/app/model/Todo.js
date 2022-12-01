Ext.define('PlaceHolder.model.Todo', {
    extend: 'Ext.data.Model',

    //! fields
    fields: [{
            name: 'userId',
            type: 'integer'
        },
        {
            name: 'id',
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