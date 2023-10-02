'use strict';

const Person = function (_firstName, _lastName) {
    this.firstName = _firstName, this.lastName = _lastName;
    this.sayMyName = function () {
        console.log('heisunberg');
    }
    this.greet = function () {
        console.log("Hello World!");
    }
}

Person.prototype.fullName = function () {return `${this.firstName} ${this.lastName}`};
Person.prototype.greet = function () {
    console.log("Hey World!");
}

let p = new Person("foo", "bar");

console.log(p);
console.log(Person.prototype);
console.log(p.__proto__);
console.log(p.__proto__ === Person.prototype); // true
p.sayMyName();
p.greet(); // Hello World !
console.log(p.fullName());
console.log(p instanceof Person);