class Site {
    constructor(protocol, name, server){
        this._full_url = `${protocol}://${name}.${server}`;
    }

    get full_url(){
        browser.url(this._full_url);
    }

}

module.exports = Site;
