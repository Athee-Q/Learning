function sumOfLargeIntegers(arr) {
    // Initialize sum as a BigInt
    let sum = BigInt(0);

    // Iterate through the array and add each element to the sum
    for (let i = 0; i < arr.length; i++) {
        // Convert the current array element to BigInt before adding
        sum += BigInt(arr[i]);
    }

    // Convert the final sum back to a regular number if needed
    // Note: Be cautious if the sum exceeds Number.MAX_SAFE_INTEGER
    return Number(sum);
}

// Example usage:
const array = [1000000000000000001, 2000000000000000002, 3000000000000000003];
const result = sumOfLargeIntegers(array);
console.log(result);