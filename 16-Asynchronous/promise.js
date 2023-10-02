'use strict';

/*
a promise is a placeholder for a future result of an asynchronous operation
*/


// let req = fetch("https://countries-api-836d.onrender.com/countries/morocco");
// console.log(req);
// setTimeout(() => console.log(req), 1000);


getCountryData("morocco");


function getCountryData(country) {
    const ret = fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then((resp) => {
        return resp.json(); // this is also a promise
    })
    .then((data) => console.log(data));
}