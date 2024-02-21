// function isValid(s) {
//     const stack = [];
//     const bracketMap = {
//         '(': ')',
//         '{': '}',
//         '[': ']'
//     };

//     for (let char of s) {
//         if (bracketMap[char]) {
//             // If it's an open bracket, push onto the stack
//             stack.push(char);
//         } else {
//             // If it's a closing bracket
//             if (char !== bracketMap[stack.pop()]) {
//                 // If the closing bracket doesn't match the last open bracket, it's invalid
//                 return false;
//             }
//         }
//     }

//     // If the stack is empty, all brackets were closed properly
//     return stack.length === 0;
// }

// // Example usage:
// const inputString = "()[]{})";
// console.log(isValid(inputString));  // Output: true


// function isValid(s) {
//     let stack = [];
//     let bracket_pairs = {')': '(', '}': '{', ']': '['};
//     console.log(Object.values(bracket_pairs))
//     console.log(Object.keys(bracket_pairs))
//     for (let char of s) {
//         if (Object.values(bracket_pairs).includes(char)) {
//             stack.push(char);
//         } else if (Object.keys(bracket_pairs).includes(char)) {
//             if (stack.length === 0 || bracket_pairs[char] !== stack.pop()) {
//                 return false;
//             }
//         }
//     }

//     return stack.length === 0;
// }

// let s = "([{})]";
// console.log(isValid(s)); // Output: false

function isValid(s){
    let stack = [];
    const bracket = {
        ')':'(',
        ']':'[',
        '}':'{'
    }
    for(let char of s){
        if(Object.values(bracket).includes(char)){
            stack.push(char)
        }else if(Object.keys(bracket).includes(char)){
            if(stack.length === 0 || bracket [char] !== stack.pop()){
                return false ;
            }
        }
    }
    return stack.length === 0 ;
}


let s = '{[(]})';
console.log(isValid(s));

