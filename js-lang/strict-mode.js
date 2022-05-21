// 'use strict'
// let word = "hello im in strict mode";
// console.log(word);

// strict mode for functions
// function strict() {
//     'use strict';
//     function nested() {
//         return "And so am I!";
//     }
//     return "I'm strict mode function " + nested();
// }
// function noStrict() {
//     return "im not strict";
// }

// strict mode for modules
// function strict() {
//     // js modules are automatically strict
// }

// 'use strict';
// let mistypeVariable;
// mistypeVaiable = 17;

// 'use strict';
// converting mistakes into errors
// let null = 5;
// let Infinity = 5;

// let obj1 = {};
// Object.defineProperty(obj1, 'x', {value: 42, writable: false});
// obj1.x = 9;

// let obj2 = { get x() { return 17; }}
// obj2.x = 5;

// let fixed = {};
// Object.preventExtensions(fixed);
// fixed.newProp = 'ohai';


// function sum(a, a, c) {
//     'use strict';
//     return a + a + c;
// }

// (function() {
//     'use strict';
//     false.true = '';
//     (14).sailing = 'home';
//     'with'.you = 'far away';
// })();

// 'use strict';
// var o = { p: 1, p: 2 }; // syntax error prior to ECMAScript 2015

// function f2() {
//     'use strict'; // see strict mode
//     return this;
// }

// // In a browser
// console.log(f2() === window); // true

// class Example {
//     constructor() {
//         console.log(this);
//         // const proto = Object.getPrototypeOf(this);
//         // console.log(Object.getOwnPropertyNames(proto));
//     }

//     first () {}

//     second() {}

//     static third() {}
// }

// new Example();