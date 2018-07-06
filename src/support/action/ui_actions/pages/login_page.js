class LoginPage {

    get email_txt(){ return browser.element("//input[@name='email']"); }

    get password_txt(){ return browser.element("//input[@name='password']"); }

    get sigin_btn(){ return browser.element("button=Sign In"); }
}

module.exports = LoginPage;
