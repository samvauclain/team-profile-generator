class Employee {
    constructor(name, employeeID, email) {
      this.name = name;
      this.employeeID = employeeID;
      this.email = email;
    }

    getName() {
      if(!this.name){
        return inquirer.prompt([
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
          }]).then((answers) => {
            this.name = answers.name;
        })
      }
    return this.name;
    }

    getId() {
      return this.employeeID;
    }
    
    getEmail() {
      return this.email;
    }
    
    getRole() {
      return "Employee";
    }
  }

  // const sam = new Employee('Sam', 7, 'billy barnacles');
  // console.table(sam.getId());
  
module.exports = Employee;