// Always return after resolving or rejecting a promise !
'use strict';

const makePromise = (success) => new Promise((resolve, reject) => {
    success? resolve("success"): reject("fail");
    for (let i = 0; i < 1e5; i++)
        console.log(i);
});

const main = async (success) => {
    try {
        console.log(await makePromise(success));
    } catch (e) {
        console.error(e);
    }
};

main(true);
// main(false);