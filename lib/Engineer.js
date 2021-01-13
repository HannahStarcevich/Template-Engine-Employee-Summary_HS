// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

const Employee = require("./Employee");

class Engineer {
    constructor(name, email, id, github) {
        super(name, "Engineer", email, id)
        this.github = github;
    }
}

module.exports = Engineer