const Engineer = require('./Employee');

class Engineer extends Employee {
    constructor(name) {
      super(name);      
    }
}

module.exports = Engineer;