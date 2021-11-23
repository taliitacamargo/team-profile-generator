const Engineer = require ('../lib/Engineer');

test ("Should return Engineer role", () => {

    const role =  "Engineer";
    const  eng = new Engineer ("John Cena", 1, "example@example.com", "GitHub");
    expect(eng.getRole()).toBe(role);

});
test("Can set GitHub", () => {
    const testNumber = "GitHub";
    const eng = new Engineer ("John Cena", 1, "example@example.com", testNumber);
    expect(eng.github).toBe(testNumber);
});
test("Can set GitHub", () => {
    const testNumber = "GitHub";
    const eng = new Engineer ("John Cena", 1, "example@example.com", testNumber);
    expect(eng.getGitHub()).toBe(testNumber);

});