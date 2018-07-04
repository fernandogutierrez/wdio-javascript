const cloud_conf = require('../../config/cloud_conf.json');

class LoginPage {

    open(site, server) {
        browser.url(`http://${site}.${server}`);
    }
    get email_txt(){ return browser.element("//input[@name='email']"); }

    get password_txt(){ return browser.element("//input[@name='password']"); }

    get sigin_btn(){ return browser.element("button=Sign In"); }

    login(email, password){
        this.email_txt.setValue(email);
        this.password_txt.setValue(password);
        this.sigin_btn.click();
    }

    login_to_default(){
        let default_creds = cloud_conf.sites[cloud_conf.default_site_index].credentials;
        this.email_txt.setValue(default_creds.email);
        this.password_txt.setValue(default_creds.password);
        this.sigin_btn.click()
    }
}

module.exports = new LoginPage();
