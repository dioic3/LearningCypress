import sign from "../pages/Signup"
import SignupFactory from '../factory/SignupFactory'


describe('Cadastro', () => {

    // before(function() {
    //     cy.log('Tudo aqui é executado uma única vez Antes de TODOS os casos de testes')

    // })

    // beforeEach(function() {
    //         cy.fixture('deliver').then((d) => {
    //             this.deliver = d
    //         })

    //     })
    // after(function() {
    //     cy.log('Tudo aqui é executado uma única vez DEPOIS de TODOS os casos de testes')
    // })

    // afterEach(function() {
    //     cy.log('Tudo aqui é executado sempre ANTES de CADA caso de teste')
    // })

    it('Seja um entregador', function() {

        var deliver = SignupFactory.deliver()

        sign.go()
        sign.fillForm(deliver)
        sign.submit()
        sign.modalContect()


    })
    it('CPF Incorreto', function() {

        var deliver = SignupFactory.deliver()

        deliver.cpf = '000000014aa'

        sign.go()
        sign.fillForm(deliver)
        sign.submit()
        sign.alert('Oops! CPF inválido')

    })
    it('Invalid email', function() {

        var deliver = SignupFactory.deliver()

        deliver.email = 'user.com.br'

        sign.go()
        sign.fillForm(deliver)
        sign.submit()
        sign.alert('Oops! Email com formato inválido.')

    })

    context('Required fields', function() {

        const messages = [
            { field: 'name', output: 'É necessário informar o nome' },
            { field: 'cpf', output: 'É necessário informar o CPF' },
            { field: 'email', output: 'É necessário informar o email' },
            { field: 'postalcode', output: 'É necessário informar o CEP' },
            { field: 'number', output: 'É necessário informar o número do endereço' },
            { field: 'delivery_method', output: 'Selecione o método de entrega' },
            { field: 'cnh', output: 'Adicione uma foto da sua CNH' }
        ]

        before(function() {
            sign.go()
            sign.submit()
        })
        messages.forEach(function(msg) {
            it(`${msg.field} is required`, function() {
                sign.alert(msg.output)
            })
        })
    })

})