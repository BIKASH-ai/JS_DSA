// Problem Description
// Count the number of prime numbers less than a non-negative number, n.

function countPrimes(n){
    if (n <=2){
        return 0;
    }

    const primes = new Array(n).fill(true);
    primes[0] = primes[1] = false;
    
    for (let i =2; i <= Math.sqrt(n); i++){
        if (primes[i]) {
            for (let j=i * i; j < n; j +-i){
                primes[j] = false;
            }
        }
    }
    return primes.filter((isPrime) => isPrime). length;
}