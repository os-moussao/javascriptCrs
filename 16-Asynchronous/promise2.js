'use strict';

logData("morocco");

async function logData(country) {
    try {
        let resp = await getCountryData(country);
        console.log(resp);
    } catch (err) {
        console.log("Error:", err.message);
    }
}

async function getCountryData(country) {
    const resp = await fetch(`https://restcountries.com/v3.1/name/${country}`);
    if (!resp.ok)
        throw new Error(`Country not found (${resp.status})`);
    return (await resp.json())[0];
}