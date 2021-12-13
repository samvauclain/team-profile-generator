const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const generateHtml = require('./src/generateHtml');
const fs = require('fs');
const teamMembers = [];

var managerQs = [
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
    {
        type: 'text',
        name: 'officeNumber',
        message: 'Please enter in the office number'
    },
]

var engineerQs = [
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
    {
        type: 'text',
        name: 'gitHubUser',
        message: 'Please enter your GitHub username'
    },
]

var internQs = [
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
    {
        type: 'text',
        name: 'school',
        message: 'What school do you go to?'
    },
]

const questions = {
    manager: managerQs,
    engineer: engineerQs,
    intern: internQs
}

const createMember = (type) => {
    inquirer.prompt(questions[type]).then(res => {
        teamMembers.push(res)
        createEmployee();
    })
}

function teamCreated(team) {
    const fileName = "./dist/index.html"
    fs.writeFile(fileName, generateHtml(team), err => {
        if (err) {
          return err;
        }
    })
}

function createEmployee() {
    inquirer.prompt({
        type: 'list',
        name: 'type',
        message: 'Would you like to add an employee?',
        choices: [
            'Manager',
            'Engineer',
            'Intern',
            'Done adding employees'
        ]  
    })
    .then((empType) => {
        console.log(empType)
        switch (empType.type) {
            case 'Manager': 
            createMember('manager')   
            break;
            case 'Engineer': 
                createMember('engineer')   
            break;
            case 'Intern':
                createMember('intern')
            break;
            case 'Done adding employees':
                teamCreated(teamMembers);
            break;
          default:
            break;
      }
              
    })
};

createEmployee();