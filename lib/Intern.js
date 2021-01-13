// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.

const Employee = require("./Employee");

class Engineer {
    constructor(name, email, id, school) {
        super(name, "Intern", email, id)
        this.school = school;
    }
}

module.exports = Engineer