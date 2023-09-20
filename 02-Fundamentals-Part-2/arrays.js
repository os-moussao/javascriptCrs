let arr = [1, 2, 3, 4, 5];

let arr2 = new Array(1, 2, 3, 4, 5);

console.log(arr, arr.length);
console.log(arr2, arr2.length);
console.log(typeof arr, typeof arr2);
console.log(arr === arr2, arr == arr2); // objects are compared by reference
console.log(JSON.stringify(arr) == JSON.stringify(arr2));
console.log([] == false);


const array1 = [1, 30, 4, 21, 100000];
array1.sort(); // sort compares elements as strings
console.log(array1); // Expected output: Array [1, 100000, 21, 30, 4]
array1.sort((a, b) => a-b);
console.log(array1);
array1.sort((a, b) => b-a);
console.log(array1);

arr.push(6);
arr.unshift(0);
console.log(arr);
let oldBack = arr.pop();
let oldFront = arr.shift();
arr.splice(1, 0, 3);
console.log(arr);
console.log(arr.indexOf(10), arr.includes(10));
console.log(arr.indexOf(3), arr.includes(3));