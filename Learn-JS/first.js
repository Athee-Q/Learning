function twoSum(nums, target) {
    const numMap = {}; // Map to store numbers and their indices

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        // Check if the complement exists in the map
        if (numMap.hasOwnProperty(complement)) {
            // If found, return the indices of the two numbers
            return [numMap[complement], i];
        }

        // If not found, add the current number and its index to the map
        numMap[nums[i]] = i;
    }

    // If no solution is found
    return null;
}

// Example usage:
const nums = [11, 22, 33, 55];
const target = 44;

const result = twoSum(nums, target);
console.log(result); // Output: [0, 1] (because nums[0] + nums[1] equals 9)
