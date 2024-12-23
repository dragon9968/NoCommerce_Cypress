/// <reference types="cypress" />
import RegisterPage from '../support/pageObject/registerPage';
import HomePage from '../support/pageObject/homePage';

describe('Register Page', () => {
  const registerPage = new RegisterPage();
  const homePage = new HomePage();
  //var random_email = cy.emailID_Alpha_Numeric()


  beforeEach(() => {
    cy.visit('/index.php/');
    cy.wait(1000);
    cy.fixture('example').then(function (data) {
      this['data'] = data;
    })
  });

   it('TC_01_Register_Empty_Data ', () => {
    cy.wait(1000);
    homePage.MENU_ACCOUNT_LINK.click();
    cy.wait(1000);
    homePage.REGISTER_LINK.click();
    cy.wait(1000);
    registerPage.Registerbtn.click();
    registerPage.validationRegisterError('This is a required field.');
   }) 

   it('TC_02_Register_Invalid_Email ', function() {
    cy.wait(1000);
    homePage.MENU_ACCOUNT_LINK.click();
    cy.wait(1000);
    homePage.REGISTER_LINK.click();
    cy.wait(1000);
    registerPage.enterToEmailtxt(this['data'].invalid_email);
    registerPage.Registerbtn.click();
    registerPage.validationEmailToastErrorMessage('Please include an \'@\' in the email address. \'long\' is missing an \'@\'.');
    //cy.get<HTMLInputElement>('input[id="email_address"]').then(($input) => {
    //expect($input[0].validationMessage).to.eq('Please include an \'@\' in the email address. \'long\' is missing an \'@\'.');
 // })

  })   

  it('TC_03_Register_Success', function() {
    cy.wait(1000);
    homePage.MENU_ACCOUNT_LINK.click();
    cy.wait(1000);
    homePage.REGISTER_LINK.click();
    cy.wait(1000);
   cy.register_account(this['data'].firstname,
      this['data'].middlename,
      this['data'].lastname,
      this['data'].email,
      this['data'].password,
      this['data'].confirm_password)

    /*  registerPage.register_account(this['data'].firstname,
      this['data'].middlename,
      this['data'].lastname,
      this['data'].email,
      this['data'].password,
      this['data'].confirm_password);   */

      /* registerPage.enterToFirstnametxt(this['data'].firstname);
      registerPage.enterToMiddlenametxt(this['data'].middlename);
      registerPage.enterToLastnametxt(this['data'].lastname);
      registerPage.enterToEmailtxt(this['data'].email);
      registerPage.enterToPasswordtxt(this['data'].password);
      registerPage.enterToConfirmPasswordtxt(this['data'].confirm_password); */
      registerPage.validationEmailSuccessMessage("Thank you for registering with Main Website Store.");
      cy.wait(1000);
      homePage.MENU_ACCOUNT_LINK.click();

     // homePage.LOGOUT_LINK.click()
  }) 

})
