const express = require("express"),
    app = express(),
    port = 8000,
    faker = require("faker"),
    server = app.listen(port, () => console.log(`Listening on port ${port}`));

app.use(express.json());

class User {
    constructor() {
        this.id = faker.random.number();
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.contactInfo = {
            phoneNumber: faker.phone.phoneNumber(),
            email: faker.internet.email(),
            password: faker.internet.password(),
        };
    }
}

class Company {
    constructor() {
        this.id = faker.random.number();
        this.companyName = faker.company.companyName();
        this.address = {
            street: faker.address.streetAddress(),
            city: faker.address.city(),
            state: faker.address.state(),
            zip: faker.address.zipCode(),
            country: faker.address.country(),
        };
        this.catchPhrase = faker.company.catchPhrase();
    }
}



app.get("/api/users/new", (request, response) => {
    response.json({ "results": new User() });
});

app.get("/api/companies/new", (request, response) => {
    response.json({ "results": new Company() });
});

app.get("/api/user/company", (req, res) => {
    res.json({ company: new Company(), user: new User() });
});