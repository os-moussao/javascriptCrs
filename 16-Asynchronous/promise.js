'use strict';

/*
a promise is a placeholder for a future result of an asynchronous operation
*/

logCountryData("morocco");

function logCountryData(country) {
    const ret = fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then((resp) => {
        return resp.json(); // this is also a promise
    })
    .then((data) => console.log(data[0]))
    .catch(err => console.log(err));
}