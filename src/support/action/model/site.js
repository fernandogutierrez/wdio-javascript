class Site {
    constructor(cloud_conf){
        this._site_name = cloud_conf.name;
        this._server = cloud_conf.server;
        this._protocol = cloud_conf.protocol;
    }

    get name(){
        return this._site_name
    }

    get server() {
        return this._server;
    }

    get protocol() {
        return this._protocol;
    }
}

module.exports = Site;
