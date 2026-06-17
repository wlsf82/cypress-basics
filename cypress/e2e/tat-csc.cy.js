describe('TAT CSC', () => {
  beforeEach(() => {
    cy.visit('https://tat-csc.s3.sa-east-1.amazonaws.com/index.html')
  })

  it('submits the form successfully', () => {
    cy.get('#firstName').type('John')
    cy.get('#lastName').type('Doe')
    cy.get('#email').type('john.doe@example.com')
    cy.get('#phone').type('1234567890')
    cy.get('#product').select('YouTube')
    cy.get('input[type="radio"][value="help"]').check()
    cy.get('textarea').type('I need help with my account.')
    cy.contains('button', 'Send').click()

    cy.get('.success').should('be.visible')
  })
})
