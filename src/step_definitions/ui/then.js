const { Then } = require('cucumber');


Then('I am able to see home page of site', function () {

});

Then('I am not able to see {string} listed inside Policies page', function (policy) {
    vcloud_ui.nav_actions.go_to_dashboard();
    vcloud_ui.nav_actions.go_to_policies();
    vcloud_ui.policy_actions.search_policy(policy);
    expect(vcloud_ui.policy_actions.policy_exists(policy)).to.not.be.true
});