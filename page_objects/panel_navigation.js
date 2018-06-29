class PanelNavigation {

    get policies_nav() {
        return browser.element("//h2[text()='Manage']/following-sibling::" +
            "div/div[contains(@class,'d-lg-block')]/span[text()='Policies']")
    };

    get dashboard_nav() {
        return browser.element("//h2[text()='Monitor']/parent::div/descendant::" +
            "div[contains(@class,'d-lg-block')]/span[text()='Dashboard']");
    };

    go_to_policies() {
        this.policies_nav.waitForVisible();
        this.policies_nav.click();
    };

    go_to_dashboard(){
        this.dashboard_nav.click();
    }
}

module.exports = new PanelNavigation();
