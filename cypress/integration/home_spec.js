describe('Home page tests', () => {
  it('Return a 404 page', () => {
    cy.visit('https://rxluz.github.io/booksys/')

    cy.get('.not-found').should('have.value', 'Page not found')
  })
})
