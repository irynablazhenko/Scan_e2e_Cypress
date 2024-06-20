/// <reference types="cypress" />

describe('sign in test', () => {
    it("first test", () => {
        cy.visit('https://uk.staging.scan.com/sign_in');
        cy.wait(100);
        cy.get('.iubenda-cs-accept-btn').click();
        cy.get('input.button.button-primary').click();
        cy.origin('https://accounts.google.com', () => {
            cy.get('input[type="email"]').type('hanna.kabachenko@scan.com');
        cy.get('input[type="submit"]').click();
        })

    })
})