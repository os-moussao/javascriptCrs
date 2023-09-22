'use strict';

// gets added as a property in the gobal this;
var val = "some value";
let This = this;

function f() {
    let x = this;
    console.log(x == This);
    const g = () => {
        console.log(this === x); // this of the parent function
    }
    function h() {
        console.log(this === x); // this of the parent function
    }
    g(), h();
}

f();

// test in browser's console
console.log(This.val); // output: "some value"

/*
function f() {
    const self = this;
    console.log("f:", this == self);
    const g = () => {
        console.log("g:", this == self);
    }
    g();
}

const self = this;

const g = () => {
    console.log(this == self);
}
*/


const obj = {
    f: function () {
        const self = this;

        
        // better to use arrow function to inherit the this
        const h = () => {
            console.log(this == self); // true
        }

        // or use self variable in normal function
        function g() {
            console.log(this == self); // false
        }

        g(), h();
    }
}

obj.f();


// testing arguments array
/*
function args() {
    console.log(arguments);
}

const a = arguments;
const args2 = () => {
    // does not have arguments array, it gets it from parent scope
    console.log(arguments === a);
}

args(), args2();
*/