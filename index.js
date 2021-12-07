const inquirer = require('inquirer');
const Employee = require('./lib/Employee');

function createEmployee() {
    inquirer
    .prompt({
        type: 'text',
        name: 'name',
        message: 'What is your name?'
    })
    .then(({ name }) => {
        this.employee = new Employee(name);
        console.log(this.employee);
    })
};

createEmployee();