const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const generateHtml = require('./src/generateHtml');
const fs = require('fs');
const teamMembers = [];
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

var managerQs = [
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

var engineerQs = [
    {
        type: 'text',
        name: 'gitHubUser',
        message: 'Please enter your GitHub username'
    },
]

var internQs = [
    {
        type: 'text',
        name: 'school',
        message: 'What school do you go to?'
    },
]

const questions = {
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

// function createIntern() {
//     inquirer.prompt(internQs).then(res => {
//         teamMembers.push(res)
//         createEmployee();
//     })
// }

// function createEngineer() {
//     inquirer.prompt(engineerQs).then(res => {
//         teamMembers.push(res)
//         createEmployee();
//     })
// }

function createEmployee() {
    inquirer
    .prompt({
        type: 'list',
        name: 'type',
        message: 'what type of employee are you adding?',
        choices: [
            'Engineer',
            'Intern',
            'Done adding employees'
        ]  
    })
    .then((empType) => {
        console.log(empType)
        switch (empType.type) {
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
        // writeToFile('./dist/index.html', generateHtml(employee));
    })
};

function createTeam() {
    inquirer.prompt(managerQs) 
    .then(res => {
        teamMembers.push(res)
        createEmployee();
    })  
}

function addEmployee() {
    inquirer.prompt(baseQs).then(data=> {
        console.log(data)    
    })
}

function addManager() {
    inquirer.prompt(managerQs).then(data=> {
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

}

createTeam();