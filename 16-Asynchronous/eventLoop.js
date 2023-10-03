'use strict';


console.log("- start");

// pushed to the callback queue
setTimeout(() => console.log("- 0 sec timer"), 0);

for (let i = 0; i < 10; i++) {
    // callbacks related to promises are pushed to the microtasks queue
    Promise.resolve(`- resolved promise ${i+1}`).then(res => {sleep(100); console.log(res); });
}

console.log("- end");


function sleep(ms) {
    const start = new Date();
    let now;
    do { now = new Date(); }
    while (now - start < ms)
}