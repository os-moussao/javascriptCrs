'use strict';

// call method

const obj = {
    x: 10, y: 11,
}

// or apply(obj, arr of args)
setZ.call(obj, 12);
logSelf.call(obj);



function logSelf() {
    console.log(this);
}

function setZ(val) {
    this.z = val;
}

// obj.setZ = setZ;
// obj.log = logSelf;
// obj.setZ(100);
// obj.log();




// bind method
const obj2 = {...obj, a: "a"};
const logObj2 = logSelf.bind(obj2);
const obj2ResetZ = setZ.bind(obj2, 0);

obj2ResetZ();

logObj2();