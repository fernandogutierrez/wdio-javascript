class SiteManager{
    constructor(site, swager_url_manager){
        this._site = site;
        this._swager_url_manager = swager_url_manager;
    }

    get_details(){
        let url = this.base_api_url + this._swager_url_manager
            .site_details_url.replace('{siteName}', this._site.name);
        return axios.get(url)
            .then(response => {
                return response.data;
            });
    }

    get base_ui_url(){
        return `${this._site.protocol}://${this._site.name}.${this._site.server}`;
    }

    get base_api_url(){
        return `${this.base_ui_url}/api/v1`;
    }
}