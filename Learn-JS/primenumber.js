/* function isPrime(n) {
    let N = n;

    if (N === 1) {
        console.log('prime number nor not a prime number');
    } else {
        let isPrime = true;

        for (let i = 2; i <= Math.sqrt(N); i++) {
            if (N % i === 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) {
            console.log('prime number');
        } else {
            console.log('not a prime number');
        }
    }
}

isPrime(11); */

/* function isPrime(N) {
    if (N <= 1) {
        return false; // 1 is not a prime number
    }

    // Check for divisibility from 2 to the square root of N
    for (let i = 2; i <= Math.sqrt(N); i++) {
        if (N % i === 0) {
            return false; // N is divisible by a number other than 1 and itself
        }
    }

    return true; // N is only divisible by 1 and itself
}

// Example usage:
const numberToCheck = 9;
if (isPrime(numberToCheck)) {
    console.log(numberToCheck + ' is a prime number');
} else {
    console.log(numberToCheck + ' is not a prime number');
}
 */

function isPrime(n){
    if (n <= 1){
       return 0
    }
    
    for(let i =2 ; i <= Math.sqrt(n) ; i++ )
    {
        if(n % i === 0){
             return 0
            }
     }
         return  1
}
    let N = 2
    console.log(isPrime(N))