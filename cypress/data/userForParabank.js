class User{
    standartUser = {
        firstName: "1",
        lastName: "1",
        addressStreet: "1",
        addressCity: "1",
        addressState: "1",
        addressZipCode: "1",
        phone: "+1",
        ssn: "1",
        username: Math.random().toString(36).substring(2,7),
        password: "1",
        confirmPassword: "1"
    }
}

export default new User()