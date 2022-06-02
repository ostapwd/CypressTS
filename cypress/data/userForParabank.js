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

    updatedUser = {
        firstName: Math.random().toString(36).substring(2,7),
        lastName: Math.random().toString(36).substring(2,7),
        addressStreet: Math.random().toString(36).substring(2,7),
        addressCity: Math.random().toString(36).substring(2,7),
        addressState: Math.random().toString(36).substring(2,7),
        addressZipCode: Math.random().toString(36).substring(2,7),
        phone: Math.random().toString(36).substring(2,7),
    }
}

export default new User()