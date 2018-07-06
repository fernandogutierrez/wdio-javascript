class SwaggerUrlManager {
    constructor(json_swagger, site, policy){
        this._json_swagger = json_swagger;
        this._site = site;
        this._policy = policy;
    }

    get_token_url(site_uuid) {
        return this._site.base_api_url + (this._json_swagger.authentication.token).replace('{siteUuid}', site_uuid);
    }

    site_details_url() {
        return this._site.base_api_url + (this._json_swagger.site.site_details).replace('{siteName}', this._site.site_name);
    }

    get policy_creation(){
        return this._site.base_api_url + this._json_swagger.policy.policy_creation;
    }
}

module.exports = SwaggerUrlManager;