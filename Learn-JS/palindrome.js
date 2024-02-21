var isPalindrome = function(x) {
    return x < 0 ? false :  x === +x.toString().split('').reverse().join('')
};

let result = isPalindrome(113);

console.log(result)
