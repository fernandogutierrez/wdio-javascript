class SiteActions{
    constructor(swager_url_manager){
        this._swagger_url = swager_url_manager;
    }

    get_site_uuid(){
        return axios.get(this._swagger_url.site_details_url)
            .then(response => {
                return response.data.SiteUuid;
            });
    }
}