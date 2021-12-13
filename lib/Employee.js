class Employee {
    constructor(name, teamManager, employeeID, officeNumber, email, gitHubUser) {
      this.name = name;
      this.employeeID = employeeID;
      this.email = email;
    }

    getName() {
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