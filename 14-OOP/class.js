'use strict';
/*
classes are not hoisted
are always executed in strict mode
*/

class Person {

    constructor (firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get firstName() {
        return this._firstName;
    }
    
    get lastName() {
        return this._lastName;
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    
    set firstName(firstName) {
        this._firstName = firstName.slice(0,1).toUpperCase() + firstName.slice(1).toLowerCase();
    }

    set lastName(lastName) {
        this._lastName = lastName.slice(0,1).toUpperCase() + lastName.slice(1).toLowerCase();
    }

    sayMyName() {
        console.log(this.fullName === "Walter White"? "Heisemberg": this.fullName);
    }

    log() {
        console.log(this);
    }

    static hey() {
        console.log("Hey 😀!");
    }
}

let p = new Person("walter", "white");

p.log();
console.log(p.firstName);
console.log(p.lastName);
console.log(p.fullName);
p.sayMyName();

Person.hey();