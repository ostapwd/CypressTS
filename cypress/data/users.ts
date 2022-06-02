class Users {
    standard_user = {
        username: 'standard_user',
        password: 'secret_sauce'
    }

    
    checkout_data = {
        first_name: 'Danylo',
        last_name: 'Andriushko',
        postal_code: '79070'
    }

    insurance_register_form_data = {
        firstName: 'Danylo',
        surName: 'Andriushko',
        phone: '+380974043913',
        street: 'Chervonoi Kaliny',
        city: 'Lviv',
        country: 'Ukraine',
        postCode: '79070',
        email: 'danyloandriushko@gmail.com',
        password: '111111',
        confirmPassword: '111111'

    }

    insurance_form_data = {
        incidents: '2',
        registration: 'C35550E',
        annualMileage: '55575',
        estimatedValue: '25000'
    }

}

export default new Users()