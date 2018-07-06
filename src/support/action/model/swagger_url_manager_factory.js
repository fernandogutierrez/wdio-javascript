const Site = require('./site');
const swagger_json = require('../../../../config/swagger_uri');
const SwaggerUrlManager = require('./swagger_url_manager');
const AuthorizationActions = require('../../action/api_actions/authorization_actions.js');
const cloud_conf = require('../../../../config/cloud_conf.json');
const User = require('./user');

class SwaggerUrlManagerFactory{
    static make(){
        const def_site = cloud_conf.sites[cloud_conf.default_site_index];
        let user = new User(def_site.credentials.email, def_site.credentials.password);
        let site = new Site(def_site.protocol, def_site.site, def_site.server);
        let swagger_url_manager = new SwaggerUrlManager(swagger_json, site);
        let authorization_actions = new AuthorizationActions(swagger_url_manager, user, site);
    }
}

module.exports = SwaggerUrlManagerFactory;
