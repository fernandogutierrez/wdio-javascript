class SwaggerUrlManager {
    constructor(json_swagger){
        this._json_swagger = json_swagger;
    }

    get token_url() {
        return this._json_swagger.authentication.token;
    }

    get site_details_url() {
        return this._json_swagger.site.site_details;
    }

    get policy_creation(){
        return this._json_swagger.policy.policy_creation;
    }
}

module.exports = SwaggerUrlManager;