class Employee {
    constructor(name, teamManager, employeeID, officeNumber, email, gitHubUser) {
      this.name = name;
      this.teamManager = teamManager;
      this.employeeID = employeeID;
      this.officeNumber = officeNumber;
      this.email = email;
      this.gitHubUser = gitHubUser;
    }
  }

//   const sam = new Employee('Sam');
//   console.log(sam);
  
module.exports = Employee;