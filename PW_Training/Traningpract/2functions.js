function factorsNum(n){
    let rArray= []
    for (let i=1; i<= n/2;i++){
       if (n % i ==0){
        rArray.push(i)
       }
    }
    return rArray
}

let x = factorsNum(12)
console.log(x);

function primeNum(m){
    let outNum = []
    for ( let i = 2; i <= m; i++){
        
        let isPrime = true;
        for (let j=2 ; j <= Math.sqrt(i);j++){
            if ( i % j == 0){
            isPrime = false;
            break;
        }
    }
    if (isPrime){outNum.push(i)
    }
}
return outNum;
}

y= primeNum(20)
console.log(y);

//rest parameters usage

function AddAllNum(...m){
    console.log(m)
    let sum=0
    for (let i=0; i<m.length;i++){
        sum+= m[i]
    }
    return sum
}

let yx = [1,2,3,4,5,6]
console.log(AddAllNum(...yx))

function oddNum(rStart,rEnd){
    let isOdd = []
    for (let i = rStart ; i<=rEnd;i++){
        if(i%2 == 1){
            isOdd.push(i)
        }
   }
   return isOdd
}

console.log(oddNum(10,30))

//factorial

function getFactrl(n){
    let result = n;
    for (i=n-1;i>=1;i--){
        result = result * i
    }
    return result
}

console.log(getFactrl(3))