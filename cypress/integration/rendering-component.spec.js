context('Render components', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Contains H3', () => {
    cy.contains('h3', 'This is a page for beauty product search');
  });

  it('Contains button', () => {
    cy.get('[data-testid="button-search"]').contains('Search');
  });
});
