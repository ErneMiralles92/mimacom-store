describe('Cart Flow', () => {
  beforeEach(() => {
    cy.fixture('cart_mock_data.json').then((json) => {
      cy.intercept(
        'GET',
        'https://json-server-grocery.herokuapp.com/grocery?_page=1&_limit=12',
        json,
      )
    })
  })
  it('cart should be empty at the beginning', () => {
    cy.visit('')
    cy.get('[data-test-id="cartList"]').should(
      'have.text',
      'The cart is empty.',
    )
  })
  it('successfully add a product to cart', () => {
    cy.visit('')
    cy.get('[data-test-id="productName"]')
      .first()
      .invoke('text')
      .then((text1) => {
        cy.get('[data-test-id="addProductBtn"]').first().click()
        cy.get('[data-test-id="cartProductName"]').should('have.text', text1)
        cy.get('[data-test-id="carProductQuantity"]').should('have.text', '1')

        cy.get('[data-test-id="incrementProductQuantity"]').first().click()
        cy.get('[data-test-id="carProductQuantity"]').should('have.text', '2')

        cy.get('[data-test-id="addProductBtn"]').first().should('be.disabled')
        cy.get('[data-test-id="incrementProductQuantity"]')
          .first()
          .should('be.disabled')
      })
  })
  it('successfully remove a product from cart', () => {
    cy.visit('')
    cy.get('[data-test-id="addProductBtn"]').first().click()
    cy.get('[data-test-id="cartList"]').should(
      'not.have.text',
      'The cart is empty.',
    )
    cy.get('[data-test-id="decrementProductQuantity"]').first().click()
    cy.get('[data-test-id="cartList"]').should(
      'have.text',
      'The cart is empty.',
    )
  })
  it('successfully enable payment', () => {
    cy.visit('')
    cy.get('[data-test-id="paymentButton"]').should('be.disabled')
    cy.get('[data-test-id="addProductBtn"]').first().click()
    cy.get('[data-test-id="paymentButton"]').should('be.enabled')
  })
})
