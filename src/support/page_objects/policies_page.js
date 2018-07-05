class PoliciesPage{

    get search_policy_txt(){
        return browser.element("//input[@placeholder='Search Policies']")
    }

    get_policy(policy_name) {
        return browser.element(`//div[contains(text(),' ${policy_name} ')]`);
    }
}

module.exports = PoliciesPage;
