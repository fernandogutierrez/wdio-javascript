const { Then } = require('cucumber');
const PanelNavigation = require('../../page_objects/panel_navigation');
const PoliciesPage = require('../../page_objects/policies_page');

Then('I am able to see home page of site', function () {

});

Then('I am not able to see {string} listed inside Policies page', function (policy) {
    PanelNavigation.go_to_dashboard();
    PanelNavigation.go_to_policies();
    PoliciesPage.search_policy(policy);
    expect(PoliciesPage.get_policy_element(policy).isVisible()).to.not.be.true;
});