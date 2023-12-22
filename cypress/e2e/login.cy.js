
describe('Launch Application', () => {
    it('Launch the test application', () => {
        cy.visit('http://localhost/opencartsite/');
        cy.get(':nth-child(2) > .dropdown > .dropdown-toggle > .d-none').click();
        cy.get(':nth-child(2) > .dropdown > .dropdown-menu > :nth-child(2) > .dropdown-item').click();
        cy.get('#input-email').type("sjoy201335@bscse.uiu.ac.bd");
        cy.get('#input-password').type("1234");
        cy.get('#form-login > .text-end > .btn').click();

  
    })
  })