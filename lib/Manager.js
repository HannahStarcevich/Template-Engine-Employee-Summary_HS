// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.

// const path = require("path");
// const fs = require("fs");

const Employee = require("./Employee");

class Manager {
    constructor(name, email, id) {
        super(name, "manager", email, id)
        this.officeNumber = 1;
    }
}

module.exports = Manager