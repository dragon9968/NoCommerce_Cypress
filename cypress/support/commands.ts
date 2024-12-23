

import RegisterPage from '../support/pageObject/registerPage';

declare global{
 namespace Cypress {
    interface Chainable<Subject = any> {
        register_account(firstName: string, middleName: string, lastName: string, email: string, 
          password: string, confirmPassword: string): Chainable<any>;
    }
  }
}
const registerPage = new RegisterPage();

  Cypress.Commands.add('register_account', (firstName: string, middleName: string, lastName: string, 
                email: string, password: string, confirmPassword: string) =>{

    registerPage.Firstnametxt.type(firstName);
    registerPage.Middlenametxt.type(middleName);
    registerPage.Lastnametxt.type(lastName);
    registerPage.Emailtxt.type(email + emailID_Alpha_Numeric() +'@qa.team');
    registerPage.Passwordtxt.type(password);
    registerPage.ConfirmPasswordtxt.type(confirmPassword);
    registerPage.Subcribedchk.click();
    cy.wait(2000);
    registerPage.Registerbtn.click();
    }
);

declare global{
  namespace Cypress {
     interface Chainable<Subject = any> {
      emailID_Alpha_Numeric(): Chainable<any>;
     }
   }
 }

function emailID_Alpha_Numeric() {
  var text = "";
  var possible = "0123456789";

  for (var i = 0; i < 5; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}