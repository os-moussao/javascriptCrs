// testing datatypes
let x = undefined;
let y;
let z = null;
console.log(x===y);
console.log(Boolean(z));

console.log(typeof true);
console.log(typeof "");
console.log(typeof 10);
console.log(typeof 3.14);
console.log(typeof 10n);
console.log(typeof y);
console.log(typeof z);
console.log(`typeof x is ${typeof x}`);
x = 10; // dynamic typing
console.log(`typeof x becomes ${typeof x}`);