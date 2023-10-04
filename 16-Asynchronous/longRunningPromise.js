'use strict';

const $1337 = { lat: 32.882162410413294, lng: -6.897813811155632 };

logData();

// handling promises that take a long time to resolve
async function logData() {
    try {
        const data = await Promise.race([
            getGeoData($1337), // actual promise
            timeout("request took too long!", 2000) // in case it took more than 1s
        ]);

        console.log(data);
    } catch (err) {
        console.error("Error:", err.message);
    }
}


async function getGeoData(pos) {
    let data = await fetch(makeUrl(pos));

    if (!data.ok) throw new Error(`cannot fetch data (${data.status})!`);

    data = await data.json();

    if (!data.country) throw Error(`server exhausted, try later!`);

    return `You're in:
- Country: ${data.country}
- State: ${data.state}
- City: ${data.city}
- Street: ${data.staddress} ${data.stnumber}`
}

function makeUrl({lat, lng}) {
    return `http://geocode.xyz/${lat},${lng}?geoit=json`;
}

function timeout(errMsg, ms) {
    return new Promise((_, reject) => setTimeout(() => reject(new Error(errMsg)), ms));
}