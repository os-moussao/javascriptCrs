'use strict';

const pro = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (Math.random() > 0.5) {
            resolve("Promise resolved !");
        } else {
            reject(new Error("Promise rejected !"));
        }
    }, 1000);
});

handlePromise();

async function handlePromise() {
    try {
        console.log(await pro);
    } catch (err) {
        console.error("Error:", err.message);
    }
}


// pro.then(resp => {
//     console.log(resp);
// })
// .catch(err => {
//     console.error("Error:", err.message);
// });