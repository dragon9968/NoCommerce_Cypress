/// <reference types="cypress" />
import LoginPage from '../support/pageObject/loginPage';
import HomePage from '../support/pageObject/homePage';
import RegisterPage from '../support/pageObject/registerPage';

describe('Login Page', () => {
  const loginPage = new LoginPage();
  const homePage = new HomePage();
  const registerPage = new RegisterPage();
  let testData: { firstname: string; middlename: string; lastname: string; email: string; password: string; confirm_password: string; };

  beforeEach(() => {
    cy.visit('/index.php/');
    cy.wait(1000);
    cy.fixture('example').then(data => {
      testData = data;
    cy.wait(1000);
    homePage.MENU_ACCOUNT_LINK.click();
    cy.wait(1000);
    homePage.REGISTER_LINK.click();
    cy.wait(1000);
    registerPage.register_account(testData.firstname,
      testData.middlename,
      testData.lastname,
      testData.email,
      testData.password,
      testData.confirm_password);

      registerPage.validationEmailSuccessMessage("Thank you for registering with Main Website Store.");
      cy.wait(1000);
      homePage.MENU_ACCOUNT_LINK.click();
      homePage.LOGOUT_LINK.click()
  })
})

   it('TC_01_Valid_Login ', () => {
    cy.wait(1000);
    homePage.MENU_ACCOUNT_LINK.click();
    cy.wait(1000);
    homePage.LOGIN_LINK.click();
    cy.wait(1000);
    loginPage.enterToEmailtxt(testData.email);
    loginPage.enterToPasswordtxt(testData.password);
    loginPage.clickToLoginbtn;
    
   })


})
