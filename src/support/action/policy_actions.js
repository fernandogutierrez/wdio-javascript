class PolicyActions {

    constructor(policy_page){
        this._policy_page = policy_page;
    }

    _get_remove_policy_btn(policy_name) {
        let tmp_del_locator = "//div[contains(text(),' $POLICY ')]/ancestor::div[@class='main-row row tr']/div[contains" +
            "(@class,'policy-cell-middle policy-cell-actions')]/i[@title='Remove policy']";
        return browser.element(tmp_del_locator.replace('$POLICY', policy_name));
    }

    click_remove_policy(policy_to_del) {
        this._get_remove_policy_btn(policy_to_del).waitForVisible(5 * 1000);
        this._get_remove_policy_btn(policy_to_del).click();
    }

    search_policy(policy_name){
        this._policy_page.search_policy_txt.waitForVisible(20 * 1000);
        this._policy_page.search_policy_txt.setValue(policy_name);
    }

    policy_exists(policy_name){
        return this._policy_page.get_policy(policy_name).isVisible();
    }
}

module.exports = PolicyActions;
