const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const generateHtml = require('./src/generateHtml');
const fs = require('fs');

function createEmployee() {
    inquirer
    .prompt([
    {
        type: 'text',
        name: 'name',
        message: 'What is your name?'
    },
    {
        type: 'text',
        name: 'teamManager',
        message: 'Who is your team manager?'
    },
    {
        type: 'text',
        name: 'employeeID',
        message: 'Employee ID number?'
    },
    {
        type: 'text',
        name: 'officeNumber',
        message: 'Please enter in the office number'
    },
    {
        type: 'text',
        name: 'email',
        message: 'Please enter in your email address'
    },
    {
        type: 'text',
        name: 'gitHubUser',
        message: 'Please enter your GitHub username'
    },
    ])
    .then(({ name, teamManager, employeeID, officeNumber, email,  gitHubUser}) => {
        this.employee = new Employee(name, teamManager, employeeID, officeNumber, email, gitHubUser);
        console.log(this.employee);
        writeToFile('./dist/index.html', generateHtml(this.employee));
    })
};

createEmployee();

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
          return err;
        }
    })
}
