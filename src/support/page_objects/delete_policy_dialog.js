class DeletePolicyDialog{

    get yes_btn() {
        return browser.element("//p[contains(text(),'Are you sure you want to delete')]/ancestor::div" +
            "[@class='modal-content']/descendant::button[text()='Yes']");
    }
}

module.exports = DeletePolicyDialog;
