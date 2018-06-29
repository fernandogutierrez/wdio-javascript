const { When } = require('cucumber');
const PanelNavigation = require('../../page_objects/panel_navigation');
const PoliciesPage = require('../../page_objects/policies_page');
const DeletePolicyDialog = require('../../page_objects/delete_policy_dialog');

When('I insert credentials', function () {

});

When('I press on login', function () {

});

When('I go to Policies page', function () {
    PanelNavigation.go_to_policies();
});

When('I remove {string} policy', function (policy) {
    PoliciesPage.search_policy(policy);
    PoliciesPage.click_remove_policy(policy);
    DeletePolicyDialog.click_on_yes();
});