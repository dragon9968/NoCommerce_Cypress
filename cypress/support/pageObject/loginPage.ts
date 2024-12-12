class loginPage {
    get Emailtxt() {
        return cy.get('#email')
    }
    get Passwordtxt() {
        return cy.get('#pass')
    }
    get Loginbtn() {
        return cy.get('button[title="Login"]')
    }

    public enterToEmailtxt(email: string){
        this.Emailtxt.type(email);
    }

    public enterToPasswordtxt(password: string){
        this.Passwordtxt.type(password);
    }

    public clickToLoginbtn(password: string){
        this.Loginbtn.click();
    }
}

export default loginPage