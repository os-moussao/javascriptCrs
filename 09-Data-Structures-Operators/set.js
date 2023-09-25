// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set

const st = new Set([11, 10, 1, 11 , 8]);

// add returns the set object
st.add(50);
st.add(9).add(7);
st.add({x: 10}).add({x: 10}); // {x: 10} will be added twice, because they're not the same object

console.log(typeof st, st.size);
console.log(st);
console.log(st.has({x: 10})); // false, because they're not the same object

nl();

const arr = [3, 1, 2, 1, 2, 3];
const arrUni = [...new Set(arr)];
console.log(arr, arrUni);

nl();

// looping with iterator
const it = st.entries();
for (let {value: val, done} = it.next(); !done; {value: val, done} = it.next()) {
    console.log(val);
}

nl();

// looping normally :)
for (let val of st) {
    console.log(val);
}

nl();

// forEach method
st.forEach((val, key, self) => {
    !isNaN(val) && console.log(val); // short circuiting
});

function nl() { console.log(); };