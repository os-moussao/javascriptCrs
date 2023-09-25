const mp = new Map([
    [0, 1], [1, 1]
]);
mp.set(10, 0).set(11, 0);

console.log(mp.has(10), mp.has(11));

console.log(mp);

mp.set(12, {x: null});

mp.forEach((val, key, self) => {
    if (!isNaN(val)) {
        mp.set(key, val + 1);
    } else if (!isNaN(val?.x)) {
        val.x++;
    }
});

console.log(mp);
for (const [key, val] of mp) { // or mp.entries()
    console.log(`mp[${key}] = ${val}`);
}

function dbg(err) {
    process.stderr.write(err);
}