'use strict';

const arr = [1, 2, 3, 4, 5, 6];

const [a, b, c, ...rest] = arr;

console.log(rest);

const obj = {
    x: "foo", y: "bar", z: "foobar"
}

const {x: $x, ...resrOfObj} = obj;

console.log($x, resrOfObj);


// rest pattern in functions
console.log(add(2, 1, 10));
console.log(add());

function add(...args) {
    let sum = 0;
    for (let x of args)
        sum += x;
    return sum;
}

// making a custom C printf in JS using rest pattern, for fun
function printf(s, ...vars) {
    let res = "", curr = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "$" && s[i+1] === "x" && vars[curr]) {
            res += String(vars[curr++]);
            i++; // skip the x
        } else {
            res += s[i];
        }
    }
    console.log(res);
}

printf("-----$x--------$x-------$xx----", 1, 2, 3, 4, 5);