const Intern = require("../lib/intern");

test("Intern enters their school", () => {
    const name = "name"
    const id = "employeeID"
    const email = "email"
    const school = "school";

    const e = new Intern(name, id, email, school);
    expect(e.school).toBe(school);
});