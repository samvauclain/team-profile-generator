const Employee = require('../lib/Employee.js');

test('creates an employee object', () => {
  const employee = new Employee('Sam', 'Bob', 012, 123, );

  expect(employee.name).toBe('Sam');
  expect(employee.teamManager).toBe('Bob');
  expect(employee.employeeID).toEqual(expect.any(Number));
  expect(employee.officeNumber).toEqual(expect.any(Number));
  expect(employee.email).toBe('samvauclain@gmail.com');
  expect(employee.gitHubUser).toBe('samvauclain');
});