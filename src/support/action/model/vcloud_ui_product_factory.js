const Site = require('./site');
const User = require('./user');
const VCloudUIProduct = require('./vcloud_ui_product');
const LoginPage = require('../pages/login_page');
const PolicyPage = require('../pages/policies_page');
const PanelNav = require('../pages/panel_navigation');
const DeletPolDialog = require('../pages/delete_policy_dialog');
const LoginActions = require('../login_actions');
const PanelNavActions = require('../panel_nav_actions');
const PolicyActions = require('../policy_actions');
const DeletPolDialogActions = require('../delete_policy_dialog_actions');
const cloud_conf = require('../../../../../config/cloud_conf.json');

class VCloudUIProductFactory{

    static make(){
        const def_site = cloud_conf.sites[cloud_conf.default_site_index];
        let site = new Site(def_site.protocol, def_site.site, def_site.server);
        let user = new User(def_site.credentials.email, def_site.credentials.password);
        let login_actions = new LoginActions(new LoginPage(), site, user);
        let nav_actions = new PanelNavActions(new PanelNav());
        let pol_actions = new PolicyActions(new PolicyPage());
        let delete_pol_actions = new DeletPolDialogActions(new DeletPolDialog);
        return new VCloudUIProduct(login_actions, nav_actions, pol_actions, delete_pol_actions);
    }

}

module.exports = VCloudUIProductFactory;
