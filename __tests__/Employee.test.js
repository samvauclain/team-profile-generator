const Employee = require("../lib/Employee");

test("Can instantiate Employee instance", () => {
  const e = new Employee();
  expect(typeof(e)).toBe("object");
});

test("Can set name via constructor arguments", () => {
  const name = "Alice";
  const e = new Employee(name);
  expect(e.name).toBe(name);
});

test("Can set id via constructor argument", () => {
  const testValue = 100;
  const e = new Employee("Foo", testValue);
  expect(e.employeeID).toBe(testValue);
});

test("Can set email via constructor argument", () => {
  const testEmail = "test@test.com";
  const e = new Employee("Foo", 1, testEmail);
  expect(e.email).toBe(testEmail);
});

test("Can get general info via getGeneralInfo()", () => {
  const testValue = "Alice";
  const e = new Employee(testValue);
  expect(e.getGeneralInfo()).toBe(testValue);
  const f = new Employee("Foo", testValue);
  expect(f.getGeneralInfo()).toBe(testValue);
  const g = new Employee("Foo", 1, testValue);
  expect(g.getGeneralInfo()).toBe(testValue);
});

test("getRole() should return \"Employee\"", () => {
  const testValue = "Employee";
  const e = new Employee("Alice", 1, "test@test.com");
  expect(e.getRole()).toBe(testValue);
});