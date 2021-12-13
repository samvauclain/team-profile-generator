const Employee = require('./Employee');

class Engineer extends Employee {
  constructor (name, employeeID, email, gitHubUser) {
    super(name, employeeID, email);
    this.gitHubUser = gitHubUser;
  }

  getGitHub () {
    if(!this.gitHubUser){
      return inquirer.prompt([
          {
              type: 'text',
              name: 'gitHubUser',
              message: 'Please enter your GitHub username'
          }]).then((answers) => {
            this.gitHubUser = answers.gitHubUser;
          })
    }
    return this.gitHubUser;
  }
  
  getRole() {
      return "Engineer";
  }
}


module.exports = Engineer;

