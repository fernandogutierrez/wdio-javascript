let base64 = require('js-base64');

class LoginActions{
    constructor(swagger_url_manager, user){
       this._swagger_url_manager = swagger_url_manager;
       this._auth = base64.encode(`${user.email}:${user.password}`)
    }
    get_token(){
        return axios.post(this._swagger_url_manager.token_url, {}, { headers: { 'Authorization': this._auth } } )
            .then(response => { return response.data.token })
            .catch(error => { console.log(error) })
    }
}
