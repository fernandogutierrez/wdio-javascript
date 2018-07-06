class DeletePolicyDialogActions {
    constructor(delete_policy_dialog){
        this._delete_policy_dialog = delete_policy_dialog;
    }

    click_on_yes() {
        this._delete_policy_dialog.yes_btn.click()
    }
}

module.exports = DeletePolicyDialogActions;
