describe('Navigation to artworks page', () => {
  it('should navigate to the about page', () => {
    cy.visit('http://localhost:3000/');

    cy.get('a[href*="artworks"]').click({ force: true });

    cy.url().should('include', '/artworks');

    cy.get('h1').contains('Artworks');
  });
});
