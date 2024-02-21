// function migratoryBirds(arr) {
//     // Create an object to store the count of each bird type
//     const birdCount = {};

//     // Iterate through the array to count the occurrences of each bird type
//     arr.forEach(birdType => {
//         if (birdCount[birdType]) {
//             birdCount[birdType]++;
//         } else {
//             birdCount[birdType] = 1;
//         }
//     });

//     // Find the maximum frequency and the corresponding bird type
//     let maxFrequency = 0;
//     let mostFrequentBirdType = 0;

//     for (const birdType in birdCount) {
//         if (birdCount[birdType] > maxFrequency) {
//             maxFrequency = birdCount[birdType];
//             mostFrequentBirdType = birdType;
//         } else if (birdCount[birdType] === maxFrequency) {
//             // If two types have the same frequency, choose the smaller id
//             mostFrequentBirdType = Math.min(mostFrequentBirdType, birdType);
//         }
//     }

//     return mostFrequentBirdType;
// }

// Example usage:
function migratoryBirds(arr){
    const birdCount = {};

    arr.forEach((birdtype) => {
        if(birdCount[birdtype]){
            birdCount[birdtype]++;
        }else{
            birdCount[birdtype] = 1;
        }
    });
    let maxFrequency = 0;
    let mostFrequentBirdType = 0;
    for(let birdtype in birdCount){
        if(birdCount[birdtype] > maxFrequency){
            maxFrequency = birdCount[birdtype];
            mostFrequentBirdType = birdtype;
        }else if(birdCount[birdtype] === maxFrequency){
            mostFrequentBirdType = Math.min(birdtype,mostFrequentBirdType)
        }
    }
    return mostFrequentBirdType;
}
const n = 6;
const arr = [1, 4, 4, 4, 5, 3];

const result = migratoryBirds(arr);
console.log(result); // Output: 4
