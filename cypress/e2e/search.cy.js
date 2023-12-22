describe('Launch Application', () => {
    it('Launch the test application', () => {
        cy.visit('http://localhost/opencartsite/');
        cy.get('.form-control').type("Laptop");
        cy.get('#search > .btn > .fa-solid').click();

  
    })
  })