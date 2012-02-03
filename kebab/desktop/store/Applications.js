Ext.define('Kebab.desktop.store.Applications', {
    extend: 'Ext.data.Store',

    model: 'Kebab.desktop.model.Application',

    // Core applications
    // TODO Remove user preferences data for keepDock parameter
    data: [
        {"id": 9991, "sys_name": "profile", "sys_department": "system", "keepDock": true},
        {"id": 9992, "sys_name": "feedback", "sys_department": "accessories", "keepDock": false}
    ]
});