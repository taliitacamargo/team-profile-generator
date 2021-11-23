const Employee = require ('../lib/Employee');
const Manager = require ('../lib/Manager');



test ("Should return Manager role", () => {

    const role =  "Manager";
    const mgn = new Manager ("John Doe", 1, "test.gmail", 2);
    expect(mgn.getRole()).toBe(role);

});
test("Can set office number", () => {
    const testNumber = 2;
    const mgn = new Manager ("John Doe", 1, "test.gmail", testNumber);
    expect(mgn.office).toBe(testNumber);
});
test("Can set office number", () => {
    const testNumber = 2;
    const mgn = new Manager ("John Doe", 1, "test.gmail", testNumber);
    expect(mgn.getOfficeNumber()).toBe(testNumber);

});