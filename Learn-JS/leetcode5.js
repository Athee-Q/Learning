function longestPalindrome(s) {
    const n = s.length;
    let start = 0; // Start index of the longest palindrome
    let maxLength = 1; // Length of the longest palindrome

    // Create a 2D array to store the palindrome information
    const dp = Array.from({ length: n }, () => Array(n).fill(false));

    // All substrings of length 1 are palindromes
    for (let i = 0; i < n; i++) {
        dp[i][i] = true;
    }

    // Check substrings of length 2
    for (let i = 0; i < n - 1; i++) {
        if (s[i] === s[i + 1]) {
            dp[i][i + 1] = true;
            start = i;
            maxLength = 2;
        }
    }

    // Check substrings of length 3 or more
    for (let len = 3; len <= n; len++) {
        for (let i = 0; i <= n - len; i++) {
            const j = i + len - 1;

            // Check if the current substring is a palindrome
            if (dp[i + 1][j - 1] && s[i] === s[j]) {
                dp[i][j] = true;
                start = i;
                maxLength = len;
            }
        }
    }

    // Return the longest palindrome substring
    return s.substring(start, start + maxLength);
}

// Example usage:
const s1 = "ppppp";
console.log(longestPalindrome(s1)); // Output: "bab" or "aba"

const s2 = "cbbd";
console.log(longestPalindrome(s2)); // Output: "bb"
 