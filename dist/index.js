"use strict";
let Name = "akram";
let age = 25;
let password;
password = 4;
password = "akram24";
let pages;
pages = 10;
pages = "ten";
let boys = ['boy1', 'boy2', 14];
let boy = ['boy1', 'boy2'];
let multiArray = [1, 2, 4, 'q', 'w', ['q', 'e']];
let bool = [true, false];
function add(n1, n2) {
    return n1 + n2;
}
console.log(add(10, 10));
console.log(typeof add(10, 10));
function OptionalAndRequired(name, age, country) {
    return `${name} - ${age} - ${country}`;
}
console.log(OptionalAndRequired("akram"));
function intersection(a) {
    console.log(a.one);
    console.log(a.two);
    console.log(a.three);
    console.log(a.four);
}
intersection({ one: "string", two: 24, three: true, four: 10 });
const myObject = {
    "one": "akram",
    "two": 25,
    "three": true,
    "four": {
        "react": 100
    }
};
myObject.one = "boughazi";
console.log(myObject.one, myObject.two, myObject.three, myObject.four.react);
//# sourceMappingURL=index.js.map