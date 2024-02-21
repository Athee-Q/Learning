function sockMerchant(n, ar) {
    // Create an object to store the count of each color
    const colorCount = {};

    // Iterate through the array and count occurrences of each color
    for (let i = 0; i < n; i++) {
        const color = ar[i];
        colorCount[color] = (colorCount[color] || 0) + 1;
    }

    // Calculate the number of pairs for each color
    let pairCount = 0;
    Object.values(colorCount).forEach(count => {
        pairCount += Math.floor(count / 2);
    });

    return pairCount;
}

// Example usage:
const n = 9;
const ar = [10, 20, 20, 10, 10, 30, 50, 10, 20];
const result = sockMerchant(n, ar);
console.log(result); // Output: 3
