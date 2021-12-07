const inquirer = require('inquirer');
const Employee = require('./lib/Employee');

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
        message: 'Who is your team manager?'
    },
    ])
    .then(({ name, teamManager, employeeID }) => {
        this.employee = new Employee(name, teamManager, employeeID);
        console.log(this.employee);
    })
};

createEmployee();