let numbers:number = 23
let user:string = "John"

let array1: number[] = [1,2,3]
let strgArray: string[] = ["A","B","C"]
let isTrue: boolean[] = [true,false]

//multiple types in array

let mixeddArray: (number|string|boolean)[] = ["1","2",1,2,true]

let mixeddArray1: (number|string|boolean)[] = ["1","2",1,2,true]

let objectArray = { age: 30, name:"john",city:"AAA"}

type ob={age:number; 
    name: string;
city: string
state:string}

let objectArray1 : ob ={
    age:24,
    name:"James",
    city:"BBB",
    state:"BBBB"
};


function demoAdd(a: number,b: number):number
{
    return (a+b);
}
demoAdd(5,3)

let result:number = demoAdd(5,4);
console.log(result);

type cred={
    username:string;
    password:string;
}

let credentials:cred = {
    username: "John",
    password: "vbvvbnvn"
}

login(credentials)
function login(creds:cred){
    console.log("username"+ creds.username);
    console.log("password"+ creds.password);
}

type nn={
    x:number;
    y:number
}

let inNum:nn ={
    x:5,
    y:6,
};
muilti(inNum);

function muilti(mulnum:nn){
    console.log("multiplyoutput"+ mulnum.x * mulnum.y);
}

type dn={
    i:number,
    j:number
}

let dnum:dn={
    i:20,
    j:2
};

divi(dnum);

function divi(divnum:dn){
    console.log("Division of two number"+ divnum.i/divnum.j);
}

function demoadd1(a:number,b:number):number{
    return a+b;
}

let mixeddArray2:(number | string | boolean)[] = [24,"Hello",false]
console.log(mixeddArray2)
mixeddArray2.forEach((val)=>{console.log( val)});