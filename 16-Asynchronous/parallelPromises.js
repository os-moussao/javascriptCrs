'use strict';

const $1337kh = { lat: 32.882162410413294, lng: -6.897813811155632 };
const $1337bg = { lat: 32.22002996557507, lng: -7.939832318965851 };
const $1337med = { lat: 35.651001881391814, lng: -5.306020439304217 };
// const $1337Campuses = [$1337kh, $1337kh, $1337med];

logData();

async function logData() {
    try {
        // const res = [
        //     await getGeoData($1337kh),
        //     await getGeoData($1337bg),
        //     await getGeoData($1337med)];
        const res = await Promise.all([
            getGeoData($1337kh),
            getGeoData($1337bg),
            getGeoData($1337med)
        ]);
        for (const loc of res) {
            console.log(loc);
        }
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