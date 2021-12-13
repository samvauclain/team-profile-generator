const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateHtml = require('./src/generateHtml');
const fs = require('fs');
const teamMembers = [];

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
                teamMembers.push(new Manager());
                    teamMembers[0].getName()
                    .then(() => 
                    teamMembers[0].getId())
                    .then(() => 
                    teamMembers[0].getEmail())
                    .then(() => 
                    teamMembers[0].getOfficeNumber())
                    .then(() => 
                createEmployee());  
            break;
            case 'Engineer': 
                    team.push(new Engineer());
                        teamMembers[0].getName()
                        .then(() => 
                        teamMembers[0].getId())
                        .then(() => 
                        teamMembers[0].getEmail())
                        .then(() => 
                        teamMembers[0].getGithub())
                    .then(() => 
                createMember())
            break;
            case 'Intern':
                team.push(new Intern());
                    teamMembers[0].getName()
                    .then(() => 
                    teamMembers[0].getId())
                    .then(() => 
                    teamMembers[0].getEmail())
                    .then(() => 
                    teamMembers[0].getSchool())
                    .then(() => 
                createMember())
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



// const questions = {
//     manager: managerQs,
//     engineer: engineerQs,
//     intern: internQs
// }

// const createMember = (type) => {
//     inquirer.prompt(questions[type]).then(res => {
//         teamMembers.push(res)
//         createEmployee();
//     })
// }

// function teamCreated(team) {
//     const fileName = "./dist/index.html"
//     fs.writeFile(fileName, generateHtml(team), err => {
//         if (err) {
//           return err;
//         }
//     })
// }