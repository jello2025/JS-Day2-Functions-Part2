function isOdd(number){
   if(number % 2 == 1){
    return true
   }else{
    return false
   }
}

let result = isOdd(5)

console.log(result)

function squareOrDouble(num){

    if(num % 2 == 1){
        return Math.sqrt(num)
    }else{
        return num * num
    }

}

let answer = squareOrDouble(16);

console.log(answer)

function oddsSmallerThan(num3){
if(num3 % 2 == 1){
    return (num3 -1) / 2
}else{
    return num3 / 2
}
}

let answr = oddsSmallerThan(6);

console.log(answr)