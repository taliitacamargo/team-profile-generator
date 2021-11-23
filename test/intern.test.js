const Intern = require ('../lib/Intern');




test ("Should return Intern role", () => {

    const role =  "Intern";
    const int = new Intern ("Bob Hardek", 1, "testintern.gmail", "OSU");
    expect(int.getRole()).toBe(role);

});
test("Can set School", () => {
    const testNumber = "OSU";
    const int = new Intern ("Bob Hardek", 1, "test.gmail", testNumber);
    expect(int.school).toBe(testNumber);
});
test("Can get School", () => {
    const testNumber = "OSU";
    const int = new Intern ("Bob Hardek", 1, "test.gmail", testNumber);
    expect(int.getSchool()).toBe(testNumber);

});