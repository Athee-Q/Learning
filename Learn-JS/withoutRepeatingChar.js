// function lengthOfLongestSubstring(s) {
//     let maxLength = 0;
//     let start = 0;
//     let charIndexMap = {};

//     for (let end = 0; end < s.length; end++) {
//         if (charIndexMap[s[end]] !== undefined) {
//             // If the character is repeated, move the start pointer to the next index of the repeated character
//             start = Math.max(charIndexMap[s[end]] + 1, start);
//         }

//         // Update the character index in the map
//         charIndexMap[s[end]] = end;

//         // Update the maximum length of the substring
//         maxLength = Math.max(maxLength, end - start + 1);
//     }

//     return maxLength;
// }

// // Example usage:
// console.log(lengthOfLongestSubstring("abcabcbb"));  // Output: 3
// console.log(lengthOfLongestSubstring("bbbbb"));      // Output: 1
// console.log(lengthOfLongestSubstring("pwwkew"));     // Output: 3

function lengthOfLongestSubstring(s){

    let maxLength = 0 ;
    let start = 0 ;
    let charIndexMap = {} ;

    for (let end = 0 ; end < s.length ; end++ ){
        if (charIndexMap[s[end]] !== undefined){
            start = Math.max(charIndexMap[s[end]] + 1 , start);
        }
        charIndexMap[s[end]] = end ;

        maxLength = Math.max( maxLength , end - start + 1)
    }
    return maxLength
}

let a = ["aaa"]
console.log(lengthOfLongestSubstring(a));