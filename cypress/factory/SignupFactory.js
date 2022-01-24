var faker = require('faker')
var cpf = require('gerador-validador-cpf')
export default {

    deliver: function() {

        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()

        var data = {
            name: `${firstName} ${lastName}`,
            cpf: cpf.generate(),
            email: faker.internet.email(firstName),
            whatsapp: '35000000000',
            address: {
                postalcode: '37553620',
                street: 'Rua Madre Maltez',
                number: '100',
                details: 'Ap 9',
                district: 'Santa Dorotéia',
                city_state: 'Pouso Alegre/MG'
            },
            delivery_method: 'Moto',
            cnh: 'cnh-digital.jpg'
        }

        return data
    }
}