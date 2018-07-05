class VCloudUiProduct {
    constructor(login_actions, nav_actions, policy_actions, delete_policy_dialog_actions){
        this._login_actions = login_actions;
        this._nav_actions = nav_actions;
        this._policy_actions = policy_actions;
        this._delete_policy_dialog_actions = delete_policy_dialog_actions;
    }

    get login_actions() {
        return this._login_actions;
    }

    get nav_actions() {
        return this._nav_actions;
    }

    get policy_actions() {
        return this._policy_actions;
    }

    get delete_policy_dialog_actions(){
        return this._delete_policy_dialog_actions;
    }
}

module.exports = VCloudUiProduct;
