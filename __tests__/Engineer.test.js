const Engineer = require("../lib/engineer");

test("Engineer enters their github username", () => {
    const name = "name"
    const id = "employeeID"
    const email = "email"
    const gitHubUser = "github";

    const e = new Engineer(name, id, email ,gitHubUser);
    expect(e.gitHubUser).toBe(gitHubUser);
  });