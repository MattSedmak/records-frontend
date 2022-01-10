describe('Navigation to about page', () => {
  it('should navigate to the about page', () => {
    cy.visit('http://localhost:3000/');

    cy.get('a[href*="about"]').click({ multiple: true, force: true });

    cy.url().should('include', '/about');

    cy.get('h1').contains('About');
  });
});
