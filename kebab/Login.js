/**
 * @class Desktop
 * @singleton
 * @author Tayfun Öziş ERİKAN <tayfun.ozis.erikan@lab2023.com>
 *
 * Kebab Desktop
 */
Ext.define('Kebab.Login', {
    extend: 'Ext.app.Application',

    /**
     * Application namespace
     */
    name: 'Kebab.login',

    /**
     * Application root folder
     */
    appFolder: Kebab.helper.root('kebab/login'),

    /**
     * Application viewport auto create property
     * @type {Boolean}
     */
    autoCreateViewport: true,

    /**
     * Application mixins
     */
    mixins: [
        'Kebab.kernel.mixin.LoadMask',
    ],

    /**
    * Application requires
    * @type {Array}
    */
    requires: [
        'Kebab.login.config.Config',
        'Kebab.login.locale.I18n'
    ],

    /**
     * Application References and selectors
     * @type {Array}
     */
    refs: [{
        ref: 'viewport',
        selector: 'login_viewport'
    }],

    /**
     * Application Controllers
     * @type {Array}
     */
    controllers: [
        'Index',
        'SignIn',
        'PasswordReset'
    ],

    /**
     * Application constructor
     */
    constructor: function() {
        var me = this;

        // Load application css resources
        Kebab.helper.loadCSS(['resources/css/login.css']);

        // TODO: Set default wallpaper
        // Kebab.helper.loadWallpaper('');

        // Call parent constructor
        me.callParent(arguments);
    },

    /**
     * Application after launch method
     * @return void
     */
    launch: function() {
        console.log('Kebab.Login was launched...');
    }
});
