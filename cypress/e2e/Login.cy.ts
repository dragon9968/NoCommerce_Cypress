/// <reference types="cypress" />
import RegisterPage from '../support/pageObject/registerPage';
import HomePage from '../support/pageObject/homePage';
import LoginPage from '../support/pageObject/loginPage';

describe('Login Page', () => {
  const registerPage = new RegisterPage();
  const homePage = new HomePage();
  const loginPage = new LoginPage();
  let email: string;  // Declare email variable in the outer scope to access across tests
  let password: string;
  //var generate_email = cy.emailID_Alpha_Numeric();
  beforeEach(() => {
    cy.visit('/index.php/');
    cy.wait(1000);
    cy.fixture('example').then(function (data) {
      this['data'] = data;
    })
    
/*     cy.fixture('example').then(function (data) {
        cy.register_account(data.firstname,
            data.middlename,
            data.lastname,
            data.email,
            data.password,
            data.confirm_password)    }) */


           
  });


  it('TC_01_Register_Success ', function() {
    homePage.MENU_ACCOUNT_LINK.click();
    cy.wait(1000);
    homePage.REGISTER_LINK.click();
    cy.wait(1000);

    cy.emailID_Alpha_Numeric().then((uniqueID) => {
     email = this['data'].email + uniqueID + '@qa.team';
     password = this['data'].password;
    registerPage.enterToFirstnametxt(this['data'].firstname);
    registerPage.enterToMiddlenametxt(this['data'].middlename);
    registerPage.enterToLastnametxt(this['data'].lastname);
    registerPage.enterToEmailtxt(email);
    registerPage.enterToPasswordtxt(password);
    registerPage.enterToConfirmPasswordtxt(this['data'].confirm_password);  
    registerPage.Subcribedchk.click();
    cy.wait(2000);
    registerPage.Registerbtn.click();  
  });   
    cy.wait(1000);
    homePage.MENU_ACCOUNT_LINK.click();
    homePage.LOGOUT_LINK.click()

  })


   it('TC_02_Login_Success ', function() {
    cy.wait(1000);
    homePage.MENU_ACCOUNT_LINK.click();
    cy.wait(1000);
    homePage.LOGIN_LINK.click();
    cy.wait(1000);
    loginPage.enterToEmailtxt(email);
    loginPage.enterToPasswordtxt(password);
    cy.wait(1000)
    loginPage.Loginbtn.click();
   }) 
})
