'use strict';

handler();

async function handler() {
    try {
        const res = await Promise.any([
            rejected(0),
            resolved("resolved 1", 500),
            resolved("resolved 2", 1000)
        ]);
        if (res === "All promises were rejected") throw res;
        console.log(res);
    } catch (err) {
        console.error("Error:", err.message);
    }
}

function resolved(msg, ms) {
    return new Promise(resolve => setTimeout(() => resolve(resolve(msg)), ms));
}

function rejected(ms) {
    return new Promise((_, reject) => setTimeout(() => reject("fail"), ms));
}