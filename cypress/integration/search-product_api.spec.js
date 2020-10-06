const serverUrl = Cypress.env('serverUrl');

context('API Product search', () => {
  beforeEach(() => {
    // fixtures
    cy.fixture('skincare-api.json').as('skincareApiJSON');

    // network stub
    cy.visit('/');
  });

  it('Search product API', () => {
    cy.server()
      .route('GET', `${serverUrl}/product?q=cream`, '@skincareApiJSON')
      .as('fetch-product');
  });
});
