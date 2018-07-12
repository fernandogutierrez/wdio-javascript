const base64 = require('js-base64');

class ApiRequestManager {
    static make(swagger_url_manager, user, site){
        this._swg_mng = swagger_url_manager;
        this._auth = base64.encode(`${user.email}:${user.password}`);
        this._user = user;
        this._site = site;
    }

    get token_url(){
        return this._main_prefix(this._swg_mng.token_url.replace('{siteUuid}', this.requestSiteUuid()))
    }

    get site_details_url() {
        this._swg_mng.site_details_url.replace('{siteName}', this._site.name)
    }

    requestSiteUuid() {
        return axios.get(this.site_details_url
            .then(response => { return response.data })
            .catch(error => { console.log(error) }))
    }
    

}

module.exports = ApiRequestManager;
