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
                scrollable: true, // make scrolling bars available
                items: [{
                    xtype: 'todogrid'
                }]
            },
            {
                //object type to instantiate
                xtype: 'panel',
                title: 'Albums',
                scrollable: true, // make scrolling bars available
                //Albums
                items: [
                    // albumsgrid
                ]
            },
            {
                //object type to instantiate
                xtype: 'panel',
                title: 'Posts',
                scrollable: true, // make scrolling bars available
                items: [{
                    xtype: 'postgrid'
                }]
            }

        ]
    },

    function () {
        console.log("Main view loaded");
    }
);