const Employee = require('../lib/Employee.js');

// Break this into multiple tests
test('creates an employee object', () => {
  const employee = new Employee('Sam', 7, 'billybarnacles');

  expect(employee.name).toBe('Sam');
  expect(employee.employeeID).toEqual(expect.any(Number));
  expect(employee.email).toBe('samvauclain@gmail.com');
  
//   expect(employee.officeNumber).toEqual(expect.any(Number));
//   expect(employee.gitHubUser).toBe('samvauclain');
//   expect(employee.teamManager).toBe('Bob');
});