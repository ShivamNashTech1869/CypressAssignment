describe('My First Test', () => {
   
    it('test1 verify the title positive', () => {

      cy.visit('https://www.amazon.in')
     // cy.title().should('eq','Log in')
     cy.get('input[id="twotabsearchtextbox"]').click();
     cy.get("input[id='twotabsearchtextbox']").type('T-Shirt').should('have.value', 'T-Shirt')
     cy.get(".a-color-state.a-text-bold").should('eq','T-Shirt')

    })


  })