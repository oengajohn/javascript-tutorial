Ext.define('PlaceHolder.store.Users', {
    //Ext.data.Store,
    extend: 'Ext.data.Store',
    //sysmbolic name
    alias: 'store.users',
    //model holds the fields, validations, other methods
    model: 'PlaceHolder.model.User',

    //proxy
    proxy: {
        //type of request
        method: 'GET',
        //location of the endpoint
        url: 'http://3.126.66.68:3000/users',
        //kind of request -> ajax,rest,jsonp,
        type: 'rest',
        reader: {
            //format => xml,json
            type: 'json',
            //totalproperty -> knowing the number of records
            // returned or in existing in the  server for pagination
            totalProperty: 'totalCount',
            // rootproperty =>  the key holding the collection of data
            rootProperty: 'rows'
        }
    },
    //number of records to get in one request
    pageSize: 3,
});