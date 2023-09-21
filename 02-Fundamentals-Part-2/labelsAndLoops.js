https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#for_statement

// shadowing
for (let i = 0; i < 5; i++) {
    let s = "";
    for (let i = 0; i < 3; i++) {
        s += " " + i;
    }
    console.log(s);
}

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