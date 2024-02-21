function minMaxSum(arr){
let sortArr = arr.sort((a,b) => a - b);
let totalSum = sortArr.reduce((a,b) => a + b)
let minimum = totalSum - sortArr[arr.length - 1];
let maximum = totalSum - sortArr[0];
console.log (`${minimum} ${maximum}`) 
}
let Arr = [12,94,24,54,46];
minMaxSum(Arr)
