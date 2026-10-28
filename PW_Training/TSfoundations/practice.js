"use strict";
let numbers = 23;
let user = "John";
let array1 = [1, 2, 3];
let strgArray = ["A", "B", "C"];
let isTrue = [true, false];
//multiple types in array
let mixeddArray = ["1", "2", 1, 2, true];
let mixeddArray1 = ["1", "2", 1, 2, true];
let objectArray = { age: 30, name: "john", city: "AAA" };
let objectArray1 = {
    age: 24,
    name: "James",
    city: "BBB",
    state: "BBBB"
};
function demoAdd(a, b) {
    return (a + b);
}
demoAdd(5, 3);
let result = demoAdd(5, 4);
console.log(result);
let credentials = {
    username: "John",
    password: "vbvvbnvn"
};
login(credentials);
function login(creds) {
    console.log("username" + creds.username);
    console.log("password" + creds.password);
}
let inNum = {
    x: 5,
    y: 6,
};
muilti(inNum);
function muilti(mulnum) {
    console.log("multiplyoutput" + mulnum.x * mulnum.y);
}

let mixeddArray2 = [24,"Hello",false]
//console.log(mixeddArray2);
mixeddArray2.forEach((val)=>{console.log( val)});