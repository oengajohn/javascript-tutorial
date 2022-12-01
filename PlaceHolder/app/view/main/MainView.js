//appName.folderName.className
// classname,configOBj,callback
Ext.define('PlaceHolder.view.main.MainView', {
        //class to extend from
        extend: 'Ext.tab.Panel',
        //xtype unique name for a view
        xtype: 'mainview',

        //content or the objects within the tabpanel
        items: [{
                //object type to instantiate
                xtype: 'panel',
                title: 'My first Panel'
            },
            {
                //object type to instantiate
                xtype: 'panel',
                title: 'My Second Panel'
            },
            {
                //object type to instantiate
                xtype: 'panel',
                title: 'My Third Panel'
            }

        ]
    },

    function () {
        console.log("Main view loaded");
    }
);