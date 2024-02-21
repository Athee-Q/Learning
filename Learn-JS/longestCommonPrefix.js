/* function longestCommonPrefix(strings) {
    if (strings.length === 0) {
        return "";
    }

    // Take the first string as the reference
    const referenceString = strings[0];

    // Iterate through each character of the reference string
    for (let i = 0; i < referenceString.length; i++) {
        const char = referenceString[i];

        // Check if the character is not common in all strings
        if (!strings.every(str => str[i] === char)) {
            // Return the prefix up to the current character
            return referenceString.slice(0, i);
        }
    }

    // If the loop completes, the entire reference string is the common prefix
    return referenceString;
}

// Example usage:
const strings = ["flower", "flow", "flight"];
const commonPrefix = longestCommonPrefix(strings);
console.log(commonPrefix); // Output: "fl"
 */;

function longestCommonPrefix(arr){
    if (arr.length === 0){
        return " ";
    }
    const reference = arr[0]
    for ( let i = 0 ; i <= reference.length ; i++){
        let char = reference[i];
        if(!arr.every(str => str[i] === char)){
           return  reference.slice(0,i)
        }else{
            ""
        }
    }
    return reference ;
}


const strings = ["abb", "abc"];
const commonPrefix = longestCommonPrefix(strings);
console.log(commonPrefix); 