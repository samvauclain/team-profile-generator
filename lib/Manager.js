const Employee = require('./Employee');
const inquirer = require('inquirer');

class Manager extends Employee {
  constructor (name, employeeID, email, OfficeNumber) {
      super(name, employeeID, email);
      this.OfficeNumber = OfficeNumber;
    }

    getOfficeNumber () {
      if(!this.OfficeNumber){
        return inquirer.prompt([
            {
              type: 'text',
              name: 'officeNumber',
              message: 'Please enter in the office number'
            }]).then((answers) => {
              this.OfficeNumber = answers.officeNumber;
            })
      }
      return this.OfficeNumber;
    }

    getRole() {
        return "Manager";
    }
}

module.exports = Manager;