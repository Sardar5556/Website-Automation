Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

describe('Visit and Click on the Product', () => {
    it('should visit the website, find the product, and click', () => {
        cy.viewport(1920, 1080);
        cy.visit('https://www.tripshepherd.com/');

        cy.contains('See More').click();
        cy.contains('Best of San Antonio Tour').click();
      
        cy.wait(4000);
        cy.get('.gap-3 > .border.w-full').click();
        cy.get('.react-calendar__month-view__days > :nth-child(6)').click();
        cy.contains('Book now').click();
    
        cy.wait(4000);
        cy.fixture('testdata.json').then((data) => {
            cy.get(':nth-child(1) > .p-2').type(data.name);
            cy.get(':nth-child(2) > .p-2').type(data.email);
            cy.get('.PhoneInputCountrySelect').select(data.country);
            cy.get('.PhoneInputInput').type(data.phone);
        });
    });
});
