'use strict';

// function expressions/arrow functions are not hoisted
const add = function (x, y) {
    return +x + +y;
}

const mult = (x, y) => x * y;

const negate = x => -x;

pr("hello world!");
pr(`-1 x 10 = ${negate(10)}!`);
pr(add(10, 20));
call(function() { console.log("heyyy!") });
call(() => { console.log("heyyy!") });
callAdd(add);
console.log(typeof add, typeof mult, typeof negate, typeof pr);

function pr(x) {
    console.log(x);
}


function undef() {
    return 
    pr("will return undefined");
}

function call(func) {
    const caller = () => {
        process.stdout.write("calling: ");
        func();
    }
    caller();
}

function callAdd(adding) {
    pr(adding(1, 2));
}
