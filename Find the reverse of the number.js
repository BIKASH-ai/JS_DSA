// Problem Description
// Given a number, return the reverse of that number.

function reverseNum(n){
    if (n < 10){
        return n;
    }
    let reverseNum = 0;
    const sign = n >= 0 ? 1 : -1;
    n = Math.abs(n);
    
    while (n>0) {
        reverseNum = (reverseNum * 10) + (n % 10);
        n = Math.floor(n / 10);
    }
    return sign * reverseNum;
}

console.log(reverseNum(25));