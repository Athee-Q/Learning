/* function calculateOutcome(n) {
    // If the maximum exponent is even, Player 2 wins; otherwise, Player 1 wins
    return n % 2 === 0 ? "2" : "1";
}

// Read the number of test cases
const t = parseInt(prompt("Enter the number of test cases:"));

// Process each test case
for (let i = 0; i < t; i++) {
    // Read the maximum exponent for the current test case
    const n = parseInt(prompt("Enter the maximum exponent for test case " + (i + 1) + ":"));

    // Calculate and display the outcome for the current test case
    const result = calculateOutcome(n);
    console.log(result);
}
 */

const T = parseInt(prompt('Enter the number of test cases:'), 10);

for (let i = 0; i < T; i++) {
    const n = parseInt(prompt(`Enter the value for test case ${i + 1}:`), 10);

    // Output based on the condition
    console.log(n % 8 === 0 ? 'Second' : 'First');
}

