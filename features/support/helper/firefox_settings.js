var FirefoxProfile = require('firefox-profile'),
    webdriverjs = require('webdriverio');


var fp = new FirefoxProfile();
fp.setPreference("browser.download.folderList",2);
fp.getSupportedProfiles('default')

fp.encoded(function(prof) {

    var client = webdriverjs.remote({
        desiredCapabilities: {
            browserName: 'firefox',
            firefox_profile: prof
        }
    });
});