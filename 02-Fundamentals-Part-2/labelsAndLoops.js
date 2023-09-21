// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#for_statement
'use strict';

String.prototype.replaceAt = function (i, x) {
    return this.substring(0, i) + x + this.substring(i + x.length);
}

// shadowing
for (let i = 0; i < 5; i++) {
    let s = "";
    for (let i = 0; i < 3; i++) {
        s += " " + i;
    }
    console.log(s);
}

nl();

// looping through arrays
let a = Array(10).fill(0);
let s = "[";
for (let x of a) s += `${x},`;
s = s.replaceAt(s.length-1, "]");
console.log(s);

nl();

// looping through objects
const obj = {x: "1", y: "2", z: "3", f: function() { console.log(); }};
for (const pr in obj) {
    console.log(`obj.${pr} = ${obj[pr]}`);
}

nl();

for (const [key, val] of Object.entries(obj)) {
    console.log(`obj.${key} = ${val}`);
}

;;;

nl();

// do while
do {
    console.log("block is executed");
} while (false)

// do..while: one line of code
do
console.log("block is executed");
while (false)

nl();

// labels
outerLoop: for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 2; j++) {
        if (i == 2) break outerLoop;
        console.log(`${i}: testing 'break label;' ...`);
    }
}

nl();

outerLoop2:
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 2; j++) {
        if (i == 1) continue outerLoop2;
        console.log(`${i}: testing 'continue label;' ...`);
    }
}

// print newline
function nl() { console.log(); }