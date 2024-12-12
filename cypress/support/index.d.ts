declare namespace Cypress {
    interface Chainable {
      /**
       * Custom command to generate a random email
       * @example cy.generateRandomEmail()
       */
      emailID_Alpha_Numeric(): Chainable<string>;
    }
  }