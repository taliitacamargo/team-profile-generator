const Employee = require ('../lib/Employee');
const Manager = require ('../lib/Manager');

test ("Should return Manager role", () => {
    const role =  "Manager";
    const mgn = new Manager ("Foo", id, "email", office);
    expect(mgn.getRole()).toBe(role)

});