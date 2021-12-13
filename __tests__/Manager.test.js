const Manager = require("../lib/manager");

test("Manager enters their office number", () => {
    const name = "name"
    const id = "employeeID"
    const email = "email"
    const OfficeNumber = "officeNumber";

    const e = new Manager(name, id, email, OfficeNumber);
    expect(e.OfficeNumber).toBe(OfficeNumber);
});