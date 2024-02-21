function kangaroo(x1, v1, x2, v2) {
    // Check if kangaroos have the same starting position and jump distance
    if (x1 === x2 && v1 === v2) {
        return "YES";
    }
    
    // Check if the relative jump distance is divisible and the remainder is zero
    if ((x2 - x1) % (v1 - v2) === 0 && (x2 - x1) / (v1 - v2) >= 0) {
        return "YES";
    } else {
        return "NO";
    }
}

// Example usage:
const result = kangaroo(0, 3, 4, 2);
console.log(result); // Output: YES