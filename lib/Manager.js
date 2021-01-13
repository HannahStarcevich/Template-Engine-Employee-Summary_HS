// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.

// const path = require("path");
// const fs = require("fs");

const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, office) {
        super(name, id, email)
        this.name = name;
        this.id = id;
        this.email = email;
        this.office = office;
        this.role = "Engineer";
    }
    getOffice() {
        return this.office;
    }
}

module.exports = Manager