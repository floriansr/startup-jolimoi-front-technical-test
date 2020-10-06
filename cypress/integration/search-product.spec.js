const serverUrl = Cypress.env('serverUrl');

context('Product search', () => {
  beforeEach(() => {
    // fixtures
    cy.fixture('skincare-api.json').as('skincareApiJSON');

    // network stub
    cy.visit('/');
  });

  it('Search product success', () => {
    cy.server()
      .route(
        'GET',
        `${serverUrl}/product?q=control mousse cleanser trouble hunter`,
        '@skincareApiJSON'
      )
      .as('fetch-product');

    cy.get('[data-testid=input-search]')
      .get('input')
      .type('control mousse cleanser trouble hunter');
    cy.get('[data-testid=button-search]').click().wait('@fetch-product');
    cy.get('[data-testid=product-contains]').contains(
      'control mousse cleanser trouble hunter'
    );
  });

  it('Search nothing', () => {
    cy.get('[data-testid=input-search]').get('input');
    cy.get('[data-testid=button-search]').click();
    cy.get('[data-testid=product-contains]').should('not.exist');
  });

  it('Search product not present in the ddb', () => {
    cy.get('[data-testid=input-search]').get('input').type('aaaa');
    cy.get('[data-testid=button-search]').click();
    cy.get('[data-testid=product-contains]').should('not.exist');
  });
});
