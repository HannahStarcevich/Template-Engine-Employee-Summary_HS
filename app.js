const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const Employee = require("./lib/Employee");
const {
    UV_FS_O_FILEMAP
} = require("constants");
const employees = []

// prompt to select if the employee is a manager, engineer or intern
function selectRole() {
    inquirer.prompt({
        type: "list",
        name: "role",
        message: "what is the employee's role?",
        choices: ["Manager", "Engineer", "Intern"]
    }).then(function ({
        role
    }) {
        switch (role) {
            case "Manager":
                console.log("manager")
                createManager()
                break;

            case "Engineer":
                console.log("engineer")
                createEngineer()
                break;

            case "Intern":
                console.log("intern")
                createIntern()
                break;
        }
    })

}

selectRole()


// prompt to create an manager with name, email and id number info
function createManager() {
    inquirer.prompt([{
        type: "input",
        name: "name",
        message: "What is the employee's name?",
    }, {
        type: "input",
        name: "email",
        message: "What is the employee's email?",
    }, {
        type: "input",
        name: "id",
        message: "What is the employee's id number?",
    }, {
        type: "input",
        name: "officeNumber",
        message: "What is the manager's office number?"
    }]).then(function (answers) {
        const manager = new Manager(answers.name, answers.email, answers.id, answers.officeNumber);
        employees.push(manager)
        addEmployee()
    })
}

// prompt to create an engineer with name, email and id number info
function createEngineer() {
    inquirer.prompt([{
        type: "input",
        name: "name",
        message: "What is the employee's name?",
    }, {
        type: "input",
        name: "email",
        message: "What is the employee's email?",
    }, {
        type: "input",
        name: "id",
        message: "What is the employee's id number?",
    }, {
        type: "input",
        name: "github",
        message: "What is the engineer's github username?"
    }]).then(function (answers) {
        const engineer = new Engineer(answers.name, answers.email, answers.id, answers.github);
        employees.push(engineer)
        addEmployee()

    })
}

// prompt to create an intern with name, email and id number info
function createIntern() {
    inquirer.prompt([{
        type: "input",
        name: "name",
        message: "What is the employee's name?",
    }, {
        type: "input",
        name: "email",
        message: "What is the employee's email?",
    }, {
        type: "input",
        name: "id",
        message: "What is the employee's id number?",
    }, {
        type: "input",
        name: "school",
        message: "What is the intern's school name?"
    }]).then(function (answers) {
        const intern = new Intern(answers.name, answers.email, answers.id, answers.school);
        employees.push(intern)
        addEmployee()

    })
}

// user selects if they want to create another employee, if not render the html with all the employee data gathered
function addEmployee() {
    inquirer.prompt({
        type: "list",
        name: "addEmployee",
        message: "Do you want to create another employee?",
        choices: ["Yes", "No"]
    }).then(function ({
        addEmployee
    }) {
        if (addEmployee === "Yes") {
            selectRole()
        } else {
            render(employees)
            fs.writeFile(outputPath, render(employees), err => {
                if (err) throw err
                console.log("the file was written")
            })
        }
    })
}