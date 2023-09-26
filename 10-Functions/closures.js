'use strict';

function count() {
    let cnt = 0;
    return function () {
        console.log(++cnt);
    };
}

// a function has access to the variable env (VE) of execution context in which it was created
// closure: VE attached to the function when it was created
const cnt = count();

cnt();
cnt();
cnt();
cnt();


nl();

// another example
let cnt2;
{
    let x = 0;
    cnt2 = (() => () => ++x)();
}

console.log(cnt2());
console.log(cnt2());
console.log(cnt2());
console.log(cnt2());

nl();


// another example
let f;
const fn = function() {
    let a = 2n;
    f = () => a *= a;
}

fn();

console.log(f());
console.log(f());
console.log(f());
console.log(f());
console.log(f());


nl();

// another example with setTimeout function

function printTimeout(x, nSec) {
    console.log("Waiting...");
    setTimeout(() => {
        console.log(x); // x is in closures
    }, nSec * 1000);
}

let x = "Hey World !"; // closures have priority over the scope chain
printTimeout("Hello World !", 1);

function nl() { console.log(); };