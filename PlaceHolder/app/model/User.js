Ext.define('PlaceHolder.model.User', {
    // Ext.data.Model,
    extend: 'Ext.data.Model',
    idProperty: '_id', //id
    fields: [
        //{name,type}
        "_id",
        "name",
        "username",
        "email",
        "street",
        "suite",
        "city",
        "zipcode",
        "lat",
        "lng",
        "phone",
        "website",
        "companyName",
        "companyCatchPhrase",
        "companyBs",
        {
            name: "address", //calculated field from the data
            convert: function (value, record) {
                console.dir(record)
                return record.get("street") + "-" + record.get("city")

            }
        }
    ],
    validators: {
        email: 'presence',
        username: {
            type: 'length',
            min: 3
        }
    },
    getUsernameAndEmail: function () {
        console.log(this.username + " " + this.email);
    }


});
/*
let user = Ext.create('PlaceHolder.model.User', {
    _id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    lat: "-37.3159",
    lng: "81.1496",
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    companyName: "Romaguera-Crona",
    companyCatchPhrase: "Multi-layered client-server neural-net",
    companyBs: "harness real-time e-markets",

});

var validation = user.getValidation();
console.log(validation);
console.log(user);*/