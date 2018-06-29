const { When } = require('cucumber')

When('I insert credentials', function () {

});

When('I press on login', function () {

});

When('I go to Policies page', function () {
    let policies_nav_btn = "//h2[text()='Manage']/following-sibling::div/div[contains(@class,'d-lg-block')]/span[text()='Policies']";
    let el = browser.element(policies_nav_btn).waitForVisible();
    browser.click(policies_nav_btn);
});

When('I remove {string} policy', function (policy) {
    browser.waitForVisible("//input[@placeholder='Search Policies']", 20 * 1000);
    browser.setValue("//input[@placeholder='Search Policies']", policy);
    let remove_pol_btn = "//div[contains(text(),' $POLICY ')]/ancestor::div[@class='main-row row tr']/" +
        "div[contains(@class,'policy-cell-middle policy-cell-actions')]/i[@title='Remove policy']";
    remove_pol_btn = remove_pol_btn.replace('$POLICY', policy);
    browser.waitForVisible(remove_pol_btn, 5 * 1000);
    browser.click(remove_pol_btn);
    let yes_btn = "//p[contains(text(),'Are you sure you want to delete')]/ancestor::div[@class='modal-content']/descendant::button[text()='Yes']";
    browser.click(yes_btn);
});