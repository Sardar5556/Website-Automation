Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

describe('Visit and Click on the Product', () => {
    it('should visit the website, find the product, and click', () => {
        cy.viewport(1920, 1080);
        cy.visit('https://www.tripshepherd.com/');

        cy.contains('See More').click();
        cy.contains('Best of San Antonio Tour').click();
      
        cy.wait(2000);
        cy.get('.gap-3 > .border.w-full').click();
        cy.get('.react-calendar__month-view__days > :nth-child(28)').click();
        cy.contains('Book now').click();
    
        cy.wait(2000);
        cy.get(':nth-child(1) > .p-2').type('Abdul Rehman');
        cy.get(':nth-child(2) > .p-2').type('sardar123@gmail.com');
        cy.get('.PhoneInputCountrySelect').select('Pakistan');
        cy.get('.PhoneInputInput').type('3335566333');
    });
});
