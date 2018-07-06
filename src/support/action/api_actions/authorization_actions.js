let base64 = require('js-base64');

class AuthorizationActions {
    constructor(swagger_url_manager, user, site){
       this._swagger_url_manager = swagger_url_manager;
       this._auth = base64.encode(`${user.email}:${user.password}`);
       this._site = site;
    }
    get_token(){
        return axios.post(this._swagger_url_manager.get_token_url(this._site.uuid), {}, { headers: { 'Authorization': this._auth } } )
            .then(response => { return response.data.token })
            .catch(error => { console.log(error) })
    }
}

module.exports = AuthorizationActions;
