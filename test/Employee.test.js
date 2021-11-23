const Employee = require ('../lib/Employee');


test ("Can create employee instance" , () => {
    const e = new Employee ();
    expect(typeof(e)).toBe("object")
});

test("Can set employee name", () => {
    const name = "Talita"
    const e = new Employee(name);
    expect(e.name).toBe(name)

});

test("Can set an ID", () => {
    const id = 3
    const e = new Employee("Talita", id);
    expect(e.id).toBe(id)

});

test ("Can get an Email", () => {
    const email = "example@example.com"
    const e = new Employee("Talita", 3, email);
    expect(e.email).toBe(email)
});

test("Can get employee name", () => {
    const name = "Talita"
    const e = new Employee(name);
    expect(e.getName()).toBe(name)

});

test("Can get an ID", () => {
    const id = 3
    const e = new Employee("Talita", id);
    expect(e.getId()).toBe(id)

});

test ("Can get an Email", () => {
    const email = "example@example.com"
    const e = new Employee("Talita", 3, email);
    expect(e.getEmail()).toBe(email)
});

test ("Should return Manager role", () => {

    const role =  "Employee";
    const e = new Employee ("Talita", 3, "example@example.com");
    expect(e.getRole()).toBe(role);

});
