const { When } = require('cucumber');


When('I insert credentials', function () {

});

When('I press on login', function () {

});

When('I go to Policies page', function () {
    vcloud_ui.nav_actions.go_to_policies();
});

When('I remove {string} policy', function (policy) {
    vcloud_ui.policy_actions.search_policy(policy);
    vcloud_ui.policy_actions.click_remove_policy(policy);
    vcloud_ui.delete_policy_dialog_actions.click_on_yes();
});