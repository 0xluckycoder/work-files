/* this keyword */

// console.log(this === window);

// a = 37;
// console.log(window.a);

// this.b = 'lakshan';
// console.log(b);

// this.b = "MDN";
// console.log(window.b);

// const test = {
//     prop: 42,
//     func: function() {
//         return this.prop;
//     }
// }
// console.log(test.func());

// function f1() {
//     return this;
// }
// console.log('e');
// console.log(f1() === window)

// function f2() {
//     'use strict';
//     return this;
// }
// console.log(f2() === undefined);

// class Example {
//     constructor() {
//         const proto = Object.getPrototypeOf(this);
//         console.log(Object.getOwnPropertyNames(proto));
//     }

//     first() {}
//     second() {}
//     static third() {}
// }

// new Example();

// var a = 'Global';
// function whatsThis() {
//     console.log(this.a);
// }
// whatsThis();

// function myFunction() {
//     console.log(this.x, this.y);
//     console.log(this);
// }
// const myObj = {
//     x: 'valueOfX',
//     y: 'valueOfY'
// }
// myFunction.call(myObj);
// const bound = myFunction.bind(myObj);
// bound();
// myFunction.apply(myObj, [1, 2])


// obj = {name: 'myobj'};
// console.log(obj);
// console.log(Object.getPrototypeOf(obj));

/* object.create */
// const target = { a:1, b:2, c:3, d:7 };
// const source = { a:1, b:2, d:8 };
// const newObj = Object.assign(target, source);
// console.log(newObj);

/* object.call */
// function Product(name, price) {
//     this.name = name;
//     this.price = price;
// }
// function Food(name, price) {
//     Product.call(this, name, price)
//     this.category = 'food';
// }
// console.log(new Food('cheese', 5).name);

// const arr = [1, 2, 3, 4, 5];
// arr.push.apply(arr, [11, 22, 33]);
// console.log(arr);

/* bind */
// const obj = {
//     value: 'x',
//     method: () => this.value
// }
// function valueTeller() {
//     console.log(this.value);
// }
// const boundFunc = valueTeller.bind(obj);
// boundFunc();