// immediately invoked function expressions
'use strict';

(function () {
    console.log("this function will be called once!");
})();


(() => console.log("this will be called once too!"))();
