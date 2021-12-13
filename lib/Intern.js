const Employee = require('./Employee');
const inquirer = require('inquirer');

class Intern extends Employee {
  constructor (name, employeeID, email, school) {
      super(name, employeeID, email,);
      this.school = school;
    }

    getSchool () {
      if(!this.school){
        return inquirer.prompt([
            {
                type: 'text',
                name: 'school',
                message: 'What school do you go to?'
            }]).then((answers) => {
              this.school = answers.school;
            })
          }
          return this.school;
    }

    getRole() {
        return "Intern";
    }
}

module.exports = Intern;