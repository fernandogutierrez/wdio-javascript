class VCloudApiProduct{
    constructor(policy_manager, auth_manager){
        this._policy_manager = policy_manager;
        this._auth_manager = auth_manager;
    }

    get policyManager(){
        return this._policy_manager;
    }
}

module.exports = VCloudApiProduct;