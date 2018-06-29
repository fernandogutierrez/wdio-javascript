const { Then } = require('cucumber');

Then('I am able to see home page of site', function () {

});

Then('I am not able to see {string} listed inside Policies page', function (policy) {
    let dashboard_nav_btn = "//h2[text()='Monitor']/parent::div/descendant::div[contains(@class,'d-lg-block')]/" +
                            "span[text()='Dashboard']";
    browser.click(dashboard_nav_btn);

    let policies_nav_btn = "//h2[text()='Manage']/following-sibling::div/div[contains(@class,'d-lg-block')]/span[text()='Policies']";
    browser.click(policies_nav_btn);

    browser.waitForVisible("//input[@placeholder='Search Policies']", 10 * 1000);
    browser.setValue("//input[@placeholder='Search Policies']", policy);
    expect(`//div[contains(text(),' ${policy} ')]`).to.not.be.visible();
});