'use strict';

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


class Student extends Person {
    _course;
    
    constructor (firstName, lastName, course) {
        super(firstName, lastName); // always has to be called first
        this.course = course;
    }

    get course() {
        return this._course;
    }

    set course(course) {
        this._course = course;
    }

    static hey() {
        console.log("Hello 📚!");
    }
}

let st = new Student("foo", "bar", "cs");

st.log();
console.log(st.fullName);
st.course = "CS";
console.log(st.course);
st.log();
Student.hey();