
function divisibleSumPairs(n, ar, k){
    let count = 0;
    for(let i = 0; i < n - 1 ; i++){
        for(let j = i + 1 ; j < n; j++){
            if((ar[i] + ar[j]) % k === 0){
                count++;
            }
        }
    }
    return count;
}


const n = 6;
const ar = [1, 3, 2, 6, 1, 2];
const k = 3;

const result = divisibleSumPairs(n, ar, k);
console.log(result)