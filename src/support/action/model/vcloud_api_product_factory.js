const VCloudApiProduct = require('./vcloud_api_product');
const ApiRequestManager = require('./api_request_manager');
const PolicyManager = require('../api_actions/policy_manager');
const AuthorizationManager = require('../api_actions/authorization_manager');
const SwaggerUrlManagerFactory = require('./swagger_url_manager_factory');
const Site = require('./site');
const swagger_json = require('../../../../config/swagger_uri');
const SwaggerUrlManager = require('./swagger_url_manager');
// const cloud_conf = require('../../../../config/cloud_conf');
const User = require('./user');

class VCloudApiProductFactory {
    static make(cloud_conf){
        let user = new User(cloud_conf.credentials);
        let site = new Site(cloud_conf);

        let swm = SwaggerUrlManagerFactory.make(swagger_json);
        let arm = new ApiRequestManager(swm, user, site);

        let pmg = new PolicyManager(arm);
        let am = new AuthorizationManager(arm);
        return new VCloudApiProduct(pm, am);
    }
}