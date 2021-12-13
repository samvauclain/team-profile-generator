const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateHtml = require('./src/generateHtml');
const fs = require('fs');
const teamMembers = [];
var teamNum = 0;

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
        if (empType.type !== 'Done adding employees') {
            teamNum++; 
        }

        if(empType.type === "Manager") {
                teamMembers.push(new Manager());
                    teamMembers[teamNum].getName()
                    .then(() => 
                    teamMembers[teamNum].getId())
                    .then(() => 
                    teamMembers[teamNum].getEmail())
                    .then(() => 
                    teamMembers[teamNum].getOfficeNumber())
                    .then(() => 
                createEmployee());  
        }
        if(empType.type === "Engineer") {
                    teamMembers.push(new Engineer());
                        teamMembers[teamNum].getName()
                        .then(() => 
                        teamMembers[teamNum].getId())
                        .then(() => 
                        teamMembers[teamNum].getEmail())
                        .then(() => 
                        teamMembers[teamNum].getGithub())
                    .then(() => 
                createMember())
        }
        if(empType.type === "Intern") {
                teamMembers.push(new Intern());
                    teamMembers[teamNum].getName()
                    .then(() => 
                    teamMembers[teamNum].getId())
                    .then(() => 
                    teamMembers[teamNum].getEmail())
                    .then(() => 
                    teamMembers[teamNum].getSchool())
                    .then(() => 
                createMember())
        }
        else { 
            return empType;
        }
      }).then(() => 
        generateHTML(teamMembers, teamNum)
    )
    .then(HTMLFile => {
            return writeToFile(HTMLFile);
        })
    .catch(err => {
        console.log(err);}); 
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