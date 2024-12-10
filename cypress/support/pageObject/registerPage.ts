
class registerPage {
    get Firstnametxt() {
        return cy.get('input#firstname')
    }
    get Middlenametxt(){
        return cy.get('input#middlename')
    }
    get Lastnametxt(){
        return cy.get('input#lastname')
    }
    get Emailtxt(){
        return cy.get<HTMLInputElement>('input[id="email_address"]')
    }
    get Passwordtxt(){
        return cy.get('input#password')
    }
    get ConfirmPasswordtxt(){
        return cy.get('input#confirmation')
    }
    get Subcribedchk(){
        return cy.get('input#is_subscribed')
    }
    get Registerbtn(){
        return cy.get('button[title="Register"]');
    }

    get FIRST_NAME_ERROR_MESSAGE(){
        return cy.get('#advice-required-entry-firstname');
    }
    get LAST_NAME_ERROR_MESSAGE(){
        return cy.get('#advice-required-entry-lastname');
    }
    get EMAIL_ERROR_MESSAGE(){
        return cy.get('#advice-required-entry-email_address');
    }
    get PASSWORD_ERROR_MESSAGE(){
        return cy.get('#advice-required-entry-password');
    }
    get CONFIRM_PASSWORD_ERROR_MESSAGE(){
        return cy.get('#advice-required-entry-confirmation');
    }
    get REGISTER_SUCCESS_MESSAGE(){
        return cy.get('.success-msg');
    }
    get EXISTING_EMAIL_ERROR_MESSAGE(){
        return cy.get('li.error-msg');
    }
 

    public register_account(firstName: string, middleName: string, lastName: string, email: string, password: string, confirmPassword: string){
        this.Firstnametxt.type(firstName);
        this.Middlenametxt.type(middleName);
        this.Lastnametxt.type(lastName);
        this.Emailtxt.type(email + this.emailID_Alpha_Numeric() +'@qa.team');
        this.Passwordtxt.type(password);
        this.ConfirmPasswordtxt.type(confirmPassword);
        this.Subcribedchk.click();
        cy.wait(2000);
        this.Registerbtn.click();
    }
    
    public validationRegisterError(errorMessage: String) {
        this.FIRST_NAME_ERROR_MESSAGE.should('have.text',errorMessage);
        this.LAST_NAME_ERROR_MESSAGE.should('have.text',errorMessage);
        this.EMAIL_ERROR_MESSAGE.should('have.text',errorMessage);
        this.PASSWORD_ERROR_MESSAGE.should('have.text',errorMessage);
        this.CONFIRM_PASSWORD_ERROR_MESSAGE.should('have.text',errorMessage);
    }


    public validationEmailToastErrorMessage(errorMessage: String) {
        this.Emailtxt.then(($input) => {
            expect($input[0].validationMessage).to.eq(errorMessage);
          })
    }

    public validationEmailSuccessMessage(successMessage: String) {
        this.REGISTER_SUCCESS_MESSAGE.should('have.text',successMessage);
    }

    public enterToEmailtxt(email: string){
        this.Emailtxt.type(email);
    }

    public emailID_Alpha_Numeric() {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    
        for (var i = 0; i < 5; i++)
          text += possible.charAt(Math.floor(Math.random() * possible.length));
    
        return text;
      }

}


export default registerPage