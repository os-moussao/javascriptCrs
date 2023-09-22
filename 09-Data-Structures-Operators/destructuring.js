'use strict';

const arr = [1, 2, 3, 4];

const [first, , third] = arr;

console.log(first, third);

const obj = {
    x: 1, y: 2, z: 3,
}

const {x, z} = obj;
let {x: a, z: b} = obj;

console.log(x, z);
console.log(a, b);


const obj2 = {a: 10, b: 20, c: 30};

let {a: v1, b: v2} = obj2;
({a, b} = obj2);

console.log(v1, v2);
console.log(a, b);


// nested
const obj3 = {
    nested: {
        i:1, j:2,
    },
}

const {i} = obj3.nested;
const {
    nested: {j: jj},
} = obj3;

console.log(i, jj);


function destr({x, y, z}) {
    console.log({x, y, z});
}

destr({
    z: 10, x: "foo", y: true
});