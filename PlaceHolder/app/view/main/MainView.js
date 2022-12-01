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
                title: 'Todos',
                items: [{
                    xtype: 'todogrid'
                }]
            },
            {
                //object type to instantiate
                xtype: 'panel',
                title: 'Albums',
                //Albums
                items: [
                    // albumsgrid
                ]
            },
            {
                //object type to instantiate
                xtype: 'panel',
                title: 'Posts',
                items: [
                    //postsgrid
                ]
            }

        ]
    },

    function () {
        console.log("Main view loaded");
    }
);