'use strict';

const ms = 1000;

settledOnly();

async function settledOnly() {
    try {
        const res = await Promise.allSettled(genPromises());
        for (const p of res) {
            console.log(p);
        }
    } catch (err) {
        console.error(err);
    }
}


function genPromises() {
    return [resolved(), rejected(), resolved(), rejected(), resolved(), rejected()];
}

function resolved() {
    return new Promise(resolve => setTimeout(() => resolve(resolve("success")), ms));
}

function rejected() {
    return new Promise((_, reject) => setTimeout(() => reject("fail"), ms));
}