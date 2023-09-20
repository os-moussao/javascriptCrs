const pers = {
    firstName: "foo",
    lastName: "bar",
    age: 23,
    phone: "555-555-555-555",
    mail: "foobar@mail.com",
    title: "heisenberg",
    sayMyName (name) {
        if (name === this.title) {
            console.log("You're goddamn right.")
        } else {
            console.log(`my name is ${this.title}!`);
        }
    },
};

pers.address = "localhost";
console.log(typeof pers);
console.log(pers.firstName, pers["lastName"]);
console.log(pers);
pers["sayMyName"]("foo");
pers.sayMyName("heisenberg");