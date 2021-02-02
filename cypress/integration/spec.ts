it('loads examples', () => {
  cy.visit('/');
  cy.contains('Welcome');
});
