describe('Launch Application', () => {
    it('Launch the test application', () => {
        cy.visit('http://localhost/opencartsite/');
        cy.get(':nth-child(2) > .dropdown > .dropdown-toggle > .d-none').click();
        cy.get(':nth-child(2) > .dropdown > .dropdown-menu > :nth-child(1) > .dropdown-item').click();
        cy.get('#input-firstname').type("SK");
        cy.get('#input-lastname').type("Joy");
        cy.get('#input-email').type("sjoy201335@bscse.uiu.ac.bd");
        cy.get('#input-password').type("1234");
        cy.get('#input-newsletter').click();
        cy.get('.text-end > .form-check > .form-check-input').click();
        cy.get('.text-end > .btn').click();
        cy.get('.alert').should('have.text', 'This email is already Used');
    })
  })