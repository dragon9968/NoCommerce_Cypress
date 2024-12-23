class homePage {
    get MENU_ACCOUNT_LINK() {
        return cy.get('a[data-target-element="#header-account"]');
    }
    get REGISTER_LINK() {
        return cy.get('a[title="Register"]');
    }

}
    export default homePage