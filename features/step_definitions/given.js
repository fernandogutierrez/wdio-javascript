const { Given } = require('cucumber')
const LoginPage = require('../../page_objects/login_page');


Given('I am on login page for site {string}', (site) => {
    browser.url(`http://${site}.myvipre.cwa2.com`);
});

Given('I am on home page for site {string}', (site) => {
    LoginPage.open(site, 'myvipre.cwa2.com');
    LoginPage.login_to_default();
});
