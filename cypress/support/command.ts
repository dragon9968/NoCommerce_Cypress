
declare namespace Cypress {
    interface Chainable<Subject = any> {
        generateRandomEmail(): typeof generateRandomEmail;
    }
  }

function generateRandomEmail(){
    const timestamp = Date.now();
    return `user${timestamp}@example.com`;
}

Cypress.Commands.add('generateRandomEmail',generateRandomEmail());
