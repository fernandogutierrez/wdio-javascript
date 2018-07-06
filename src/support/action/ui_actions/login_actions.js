class LoginPageActions {

    constructor(login_page, site, user){
        this._login_page = login_page;
        this._site = site;
        this._user = user;
    }

    login(user=this._user){
        this._login_page.email_txt.setValue(user.email);
        this._login_page.password_txt.setValue(user.password);
        this._login_page.sigin_btn.click();
    }

    open(site=this._site) {
        browser.url(site.full_url);
    }

}

module.exports = LoginPageActions;
