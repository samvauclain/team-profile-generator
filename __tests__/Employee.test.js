const Employee = require('../lib/Employee.js');

// Break this into multiple tests
test('creates an employee object', () => {
  const employee = new Employee('Sam', 'Bob', 312, 123, 'samvauclain@gmail.com', 'samvauclain');

  expect(employee.name).toBe('Sam');
  expect(employee.teamManager).toBe('Bob');
  expect(employee.employeeID).toEqual(expect.any(Number));
  expect(employee.officeNumber).toEqual(expect.any(Number));
  expect(employee.email).toBe('samvauclain@gmail.com');
  expect(employee.gitHubUser).toBe('samvauclain');
});