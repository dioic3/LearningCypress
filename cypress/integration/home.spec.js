describe('home page', () => { // define uma suite para o teste
    it('o aplicativo deve estar online', () => {
        cy.visit('/') //teste para visitar o site
        cy.get('#page-home main h1').should('contain', 'Seja um parceiro entregador pela Buger Eats')
            //.should('posso usar o contain or have.text'), sugerindo que deve conter o texto "esperado"
            //o  comando garanteque o aplicativo esteja online.
            //o should é um assert, é uma expectativa do teste.
            //.viewport, .visit e .get são palavras reservadas no JavaScript
    })
})