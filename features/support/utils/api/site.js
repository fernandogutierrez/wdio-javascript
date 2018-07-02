
function getUserToken(){
    return axios.post(uri, {},
        { headers: {
                'Authorization': creds
            }})
        .then(function (response) {
            return response.data.token
        })
        .catch(function (error) {
            console.log(error);
        });
};
