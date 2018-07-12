const SwaggerUrlManager = require('./swagger_url_manager');

class SwaggerUrlManagerFactory{

    static make(swagger_json){
        return new SwaggerUrlManager(swagger_json);
    }
}

module.exports = SwaggerUrlManagerFactory;
