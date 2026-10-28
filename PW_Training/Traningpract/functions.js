let n = 11;
if (n % 2 == 1) {
    console.log(n + "is odd");
}
else {
    console.log(n + "n is even");
}

let day = 4;
switch (day) 
{
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    default:
        console.log("Weekend");
}

let num = 11;
console.log((num % 2))
let result = num % 2 == 1 ? console.log("odd"): console.log("even");

for(let i=1; i<=5;i++){
    console.log(5);
}

for(let i =1;i<=10; i++){
    console.log(i);
}

for(let i=0; i<=10; i+=2){
    console.log(i);
}

for(let i=1; i <=10;i++){
    if(i%2 ==0){
        console.log(i);
    }
}

let i =1;
while(i <=5){
    console.log(i);
    i++;
}

let j =10;
while(j>=5){
    console.log(j);
    j--;
}

let k = 1
do{console.log(k);
    k++;
}
while(k <=5);

let l = 1
do{ console.log(l + 'x' + '2' + '='+ 2*l);
l++;
}
while(l<=10)