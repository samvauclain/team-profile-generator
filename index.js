const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const generateHtml = require('./src/generateHtml');
const fs = require('fs');
var baseQs = [
    {
        type: 'text',
        name: 'name',
        message: 'What is your name?'
    },
    {
        type: 'text',
        name: 'employeeID',
        message: 'Employee ID number?'
    },
    {
        type: 'text',
        name: 'email',
        message: 'Please enter in your email address'
    },
]

var manQs = [
    {
        type: 'text',
        name: 'teamManager',
        message: 'Who is your team manager?'
    },
    {
        type: 'text',
        name: 'officeNumber',
        message: 'Please enter in the office number'
    },
]

var EngQs = [
    {
        type: 'text',
        name: 'gitHubUser',
        message: 'Please enter your GitHub username'
    },
]

function createEmployee() {
    inquirer
    .prompt({
        type: 'list',
        name: 'type',
        message: 'what type of employee are you adding?',
        choices: [
            'Manager',
            'Engineer',
            'Intern'
        ]
    })
    .then((empType) => {
        switch (empType.type) {
            case 'Manager':
                addManager()        
            break;
          default:
              break;
      }
        // writeToFile('./dist/index.html', generateHtml(employee));
    })
};

function addManager() {
    inquirer.prompt(baseQs).then(data=> {
        console.log(data)    
    })
}

function addEngineer() {
    inquirer.prompt(baseQs).then(data=> {
        console.log(data.name)
    })
}

function addIntern() {
    inquirer.prompt(baseQs).then(data=> {
        console.log(data.name)
    })
}

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
          return err;
        }
    })
}

createEmployee();

