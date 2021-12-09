class Employee {
    constructor(name, teamManager, employeeID, officeNumber, email, gitHubUser) {
      this.name = name;
      this.employeeID = employeeID;
      this.email = email;
      // the three above are needed
      this.officeNumber = officeNumber;
      this.gitHubUser = gitHubUser;
      this.teamManager = teamManager;
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

  const sam = new Employee('Sam', "bam", 7, 32, "something@somthing.com", "billy barnacles");
  console.table(sam.getId());
  
module.exports = Employee;