describe('Launch Application', () => {
    it('Launch the test application', () => {
        cy.visit('http://localhost/opencartsite/index.php?route=product/category&language=en-gb&path=20_27');
        cy.get('[formaction="http://localhost/opencartsite/index.php?route=checkout/cart.add&language=en-gb"] > .fa-solid').click();
        cy.get('.dropdown > .btn-lg').click();
        cy.get('#header-cart > div > ul > li > div > p > a:nth-child(1) > strong').click();
        
        cy.get(':nth-child(1) > .accordion-header > .accordion-button').click();
        cy.get(':nth-child(7) > .text-end > .btn').click();

        //convert doller to pound
        cy.get('#form-currency > .dropdown > .dropdown-toggle > .d-none').click();
        cy.get('#form-currency > .dropdown > .dropdown-menu > :nth-child(2) > .dropdown-item').click();
    })
  })