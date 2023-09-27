'use strict';

const A = [0, 1, 2, 3, 4, 5, 6];

let arr = [...A];

arr.forEach((val) => console.log(val));
nl();
arr.forEach((val, idx) => console.log(`arr[${idx}] = ${val}`));
nl();
arr.forEach((val, idx, self) => console.log(self.at(idx) === val));

nl();
console.log(arr.slice(3, 5));
console.log(arr.splice(3, 2), arr);
console.log(arr.reverse(), arr);

arr = [...A];

nl();

let newArr = arr.map(x => x * 2);

console.log(newArr);

newArr = arr.map((val, idx) => val + idx);

console.log(newArr);

newArr = arr.filter(val => val < 3);

console.log(newArr);

newArr = arr.filter((val, idx) => idx % 2 == 0);

console.log(newArr);

console.log(arr.reduce((acc, val /* [idx, arr] */) => acc + val));
console.log(arr.reduce((acc, val) => acc + val, 0));
// console.log([].reduce((acc, val) => acc + val));

// chaining methods
console.log(arr.filter(val => val <= 3)
            .map(val => -val)
            .reduce((acc, val) => acc + val, 0));


nl();

console.log(arr.find(x => x > 3));
console.log(arr.some(x => x > 3));
console.log(arr.every(x => x > 3));

function nl() { console.log(); }