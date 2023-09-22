const arr = [1, 2, 3, 4];

const newArr = [0, ...arr, 5];

console.log(...arr);
console.log(...newArr);
add(...[2, 2, 2, 2]);

function add(a, b, c, d) {
    console.log(a+b+c+d);
}

const s = "hello";
console.log(...s);

const obj = {
    x: 1, y: "foo", z: "bar"
}

const cpy = {...obj}; // creates a copy
cpy.x = "foobar";
console.log(obj);

const newObj = {
    X: "1",
    ...obj,
    Y: "FOO",
    Z: "BAR"
}

console.log(newObj);

