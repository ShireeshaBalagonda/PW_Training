let n = 5;
while(n>=1){
    console.log(n);
    n--;
}
let nm =5
do{console.log(nm);
    nm++;
}
while(nm<10)

let num = 2567;
denominators = [2000,500,200,100,50,20,10,5,2,1];
//console.log(denominators.length);

for(let d=0;d<=denominators.length;d++){
    noofden = Math.floor(num / denominators[d])
    
    if(noofden!=0)
    {
        num = num % denominators[d]
        console.log(denominators[d] + "*" + noofden+ "="+ (denominators[d]*noofden))
    }
}

