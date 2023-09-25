let s = "0123456789"; s += s;

console.log(s.includes("90"));
console.log(s.includes("90", 10));
console.log(s.indexOf(0), s.lastIndexOf(0));
console.log(s.slice(8, 12));
console.log(s.slice(8));
console.log(s.slice(-8));
console.log(s.slice(8, -2));
console.log(s.slice(2) === s.substring(2));

let ss = new String("   foo   \n");
console.log(ss);
console.log(ss.toString().trim());

// regex
console.log(s.replace(/0/g, "00"));

console.log(s.split("0"));

console.log(["hello", "world", "!"].join(' '));

console.log("1".padStart(4, "0"));

console.log("1".repeat(10));