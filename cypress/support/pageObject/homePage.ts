class homePage {
    get MENU_ACCOUNT_LINK() {
        return cy.get('a[data-target-element="#header-account"]');
    }
    get REGISTER_LINK() {
        return cy.get('a[title="Register"]');
    }
    get LOGIN_LINK() {
        return cy.get('a[title="Log In"]');
    }
    get LOGOUT_LINK() {
        return cy.get('a[title="Log Out"]');
    }
}
    export default homePage