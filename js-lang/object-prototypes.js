// const person1 = {
//     name: "Chris",
//     introduceSelf() {
//         console.log(`Hi! I'm ${this.name}`);
//     }
// };
// const person2 = {
//     name: "Json",
//     introduceSelf() {
//         console.log(`Hi I'm ${this.name}`);
//     }
// }
// person1.introduceSelf();
// person2.introduceSelf();

// function createPerson(name) {
//     const obj = {};
//     obj.name = name;
//     obj.introduceSelf = function() {
//         console.log(`Hi im ${this.name}`);
//     };
//     return obj;
// }
// let john = createPerson('john henry');
// console.log(john);

// function Person(name) {
//     this.name = name;
//     this.introduceSelf = function() {
//         console.log(`Hi im ${this.name}`);
//     };
// }

// const salva = new Person('salva');
// salva.introduceSelf();

// const frankie = new Person('frankie');
// frankie.introduceSelf();

// const myObject = {
//     city: "Madrid",
//     greet() {
//         console.log(`Greetings from ${this.city}`);
//     },
// };
// myObject.greet();


/* getPrototypeOf - Returns the prototype of an object. */ 

// const prototype1 = {};
// const object1 = Object.create(prototype1);
// console.log(Object.getPrototypeOf(object1 === prototype1));

// const myDate = new Date();
// let object = myDate;
// do {
//     object = Object.getPrototypeOf(object);
//     console.log(object);
// } while(object);

// const myDate = new Date(1995, 11, 17);
// console.log(myDate.getYear());
// myDate.getYear = function () {
//     console.log("something else");
// }
// myDate.getYear();


/* Object.create - Creates an object that has the specified prototype or that has null prototype. */

// const personPrototype = {
//     greet() {
//         console.log("hello!");
//     }
// }
// const carl = Object.create(personPrototype);
// console.log(carl);


/* Object.assign - Copy the values of all of the enumerable own properties from one or more source objects to a target object. Returns the target object. */ 

// const personPrototype = {
//     greet() {
//         console.log(`hello, my name is ${this.name}`);
//     }
// }
// function Person(name) {
//     this.name = name;
// }
// Object.assign(Person.prototype, personPrototype);


/* hasOwn - Check whether a property is own property or not*/ 

// const irma = new Person("Irma");
// console.log(Object.hasOwn(irma, "name"));
// console.log(Object.hasOwn(irma, "greet"));