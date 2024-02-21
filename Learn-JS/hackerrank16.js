function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
}

function lcm(a, b) {
    return (a * b) / gcd(a, b);
}

function getTotalX(a, b) {
    // Find the LCM of all elements in array 'a'
    const lcmA = a.reduce(lcm);

    // Find the GCD of all elements in array 'b'
    const gcdB = b.reduce(gcd);

    // Count the multiples of lcmA that evenly divide gcdB
    let count = 0;
    for (let i = lcmA; i <= gcdB; i += lcmA) {
        if (gcdB % i === 0) {
            count++;
        }
    }

    return count;
}

// Example usage:
const a = [2, 4];
const b = [16, 32, 96];

const result = getTotalX(a, b);
console.log(result); // Output: 3
