const { Given } = require('cucumber');

Given('I am on login page for site {string}', (site) => {
    browser.url(`http://${site}.myvipre.cwa2.com`);
});

Given('I am on home page for site {string}', (site) => {
    vcloud_ui.login_actions.open();
    vcloud_ui.login_actions.login();
});
