class PanelNavActions{

    constructor(panel_nav_page){
        this._panel_nav_page = panel_nav_page;

    }

    go_to_policies() {
        this._panel_nav_page.policies_nav.waitForVisible();
        this._panel_nav_page.policies_nav.click();
    };

    go_to_dashboard(){
        this._panel_nav_page.dashboard_nav.click();
    }

}

module.exports = PanelNavActions;
