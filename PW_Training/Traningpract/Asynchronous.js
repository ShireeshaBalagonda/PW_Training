function calculator(a,b,operation){
    return operation(a,b)
}

let sum = calculator(5,3,function(x,y){
    return x+y;
})

let multipl = calculator(5,3,function(x,y){
    return x*y;
})

console.log("sum:" , sum)
console.log("Multiplication:" , multipl)

setTimeout(function(){
    console.log("This message is displayed after 3 seconds")
},3000);

setTimeout(function(){
    console.log("This message is displayed after 2 seconds")
},2000);