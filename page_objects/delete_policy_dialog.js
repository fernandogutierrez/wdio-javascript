class DeletePolicyDialog{

    get yes_btn() {
        return browser.element("//p[contains(text(),'Are you sure you want to delete')]/ancestor::div" +
            "[@class='modal-content']/descendant::button[text()='Yes']");
    }

    click_on_yes() {
        this.yes_btn.click()
    }
}

module.exports = new DeletePolicyDialog();
