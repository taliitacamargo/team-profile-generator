const Employee = require ('../lib/Employee');
const Manager = require ('../lib/Manager');

test ("Should return Manager role", () => {
    const role =  "Manager";
    // const id = manager.id;
    // const email = manager.email;
    // const office = manager.office
    const mgn = new Manager ("Foo", id, email, office);
    expect(mgn.getRole()).toBe(role)

});
