'use strict';

const $1337 = { lat: 32.882162410413294, lng: -6.897813811155632 }

logGeoData($1337);


async function logGeoData(pos) {
    try {
        let data = await fetch(makeUrl(pos));
    
        if (!data.ok) throw new Error(`cannot fetch data (${data.status})!`);

        data = await data.json();

        if (!data.country) throw Error(`server exhausted, try later!`);
        
        console.log("You're in: ");
        console.log(`- Country: ${data.country}`);
        console.log(`- State: ${data.state}`);
        console.log(`- City: ${data.city}`);
        console.log(`- Street: ${data.staddress} ${data.stnumber}`);

    } catch (err) {
        console.error("Error:", err.message);
    }
}

function makeUrl({lat, lng}) {
    return `http://geocode.xyz/${lat},${lng}?geoit=json`;
}