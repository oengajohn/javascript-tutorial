Ext.define('PlaceHolder.overrides.data.proxy.Server', {
    override: 'Ext.data.proxy.Server',
    config: {
        startParam: '_start',
        limitParam: '_limit'
    }

});