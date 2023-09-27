'use strict';

let date = new Date();

console.log(date.getFullYear());

console.log(new Date("December 05, 2020"));

function rand(a, b) {
    return Math.floor(Math.random() * (b - a + 1)) + a;
}