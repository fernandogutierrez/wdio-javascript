class Site {
    constructor(protocol, name, server){
        this._base_ui_url = `${protocol}://${name}.${server}`;
        this._base_api_url = `${this._base_ui_url}/api/v1`
        this._site_name = name
    }

    get base_ui_url(){
        return this._base_api_url;
    }

    get base_api_url(){
        return this._base_ui_url;
    }

    get site_name(){
        return this._site_name
    }
}

module.exports = Site;
