function table(nx){
    for (let i=1; i<=10; i++)
        console.log("print table of "+ nx+"*" +i +"=" + nx*i)
}

let n=[3,4,5]
for (j=0;j <n.length;j++){
    table(n[j]);
}


function calculator(a,b,operation){
    return operation(a,b)
}

console.log(calculator(10,20,(x,y)=> x*y ))

let data = [11,12,13];
data.forEach((x)=> console.log(x));
data.forEach((x)=> console.log(x*x));

//for-of
numbers = [1,2,3,4,5]

for (let n of numbers){
    console.log(n);
}

let userData ={
    A1 : {age:25,id:123},
    A2 : {age:26,id:234}
}

for (let i in userData){
    console.log(i)
}



for(let i in userData){
    console.log(userData[i])
}

let userData1 ={
    A1 : {age:25,id:123},
    A2 : {age:26,id:234}
}

userData1.forEach(function(user){
    if(user.startsWith("A")){
        console.log(user);
    }
});


let users1 = ["Allice","Bob","Charle"]
users.forEach(function(user){
    if (user.startsWith("A")){
        console.log(user);
    }
});
let users = ["Allice","Bob","Charle"]
users.forEach( user => user.startsWith("A")? console.log(user):null);


let usersdata ={
    age: 30,
    name: "john",
    getdetails: function(){
        return this.age
    }
    

}
console.log(usersdata.getdetails)