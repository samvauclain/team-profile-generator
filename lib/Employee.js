class Employee {
    constructor(name, teamManager, employeeID, officeNumber, email, gitHubUser) {
      this.name = name;
      this.teamManager = teamManager;
      this.employeeID = employeeID;
      this.officeNumber = officeNumber;
      this.email = email;
      this.gitHubUser = gitHubUser;
    }

    getId(){
      return this.employeeID
    }

    getRole(){
      return "Employee"
    }

  }

  const sam = new Employee('Sam', "bam", 7, 32, "something@somthing.com", "billy barnacles");
  console.table(sam.getId());
  
module.exports = Employee;