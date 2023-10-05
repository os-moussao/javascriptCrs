console.log("Importing Module");

// import {f as fn, g} from './exporting.js'
// fn();
// g();

import * as Exported from './exporting.js';
import hello from './defaultExport.js';

hello();
Exported.f();
Exported.g();

const res = await fetch("https://jsonplaceholder.typicode.com/posts");
const data = await res.json();



// (modules are executed in strict mode by default)