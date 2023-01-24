/// <reference types="cypress" />

describe('Learning test', function () {
    it('Testing Web', () => {
        cy.visit('https://books.toscrape.com/'); //to visit the site
        cy.contains('Travel').click(); // contains "travel" and click to click it
        cy.get('h1').should('have.text', 'Travel'); 
        cy.get(':nth-child(1) > .product_pod > h3 > a').click();
        cy.get('h1').should('contain.text', "It's Only the Himalayas");
    });
})