function birthday(s, d, m) {
    let countWays = 0;

    for (let i = 0; i <= s.length - m; i++) {
        const segment = s.slice(i, i + m);
        const sum = segment.reduce((acc, val) => acc + val, 0);

        if (sum === d) {
            countWays++;
        }
    }

    return countWays;
}

// Example usage:
const n = parseInt(prompt("Enter the number of squares:"));
const squares = prompt("Enter space-separated integers on chocolate squares:")
    .split(" ")
    .map(Number);
const [d, m] = prompt("Enter Ron's birth day and birth month:")
    .split(" ")
    .map(Number);

const result = birthday(squares, d, m);
console.log(result);
