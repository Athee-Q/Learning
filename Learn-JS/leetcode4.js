function findMedianSortedArrays(nums1, nums2) {
    if (nums1.length > nums2.length) {
        // Ensure nums1 is the shorter array for simplicity in the binary search
        [nums1, nums2] = [nums2, nums1];
    }

    const m = nums1.length;
    const n = nums2.length;
    const totalLength = m + n;

    let low = 0;
    let high = m;

    while (low <= high) {
        const partitionX = Math.floor((low + high) / 2);
        const partitionY = Math.floor((totalLength + 1) / 2) - partitionX;

        const maxX = partitionX === 0 ? Number.NEGATIVE_INFINITY : nums1[partitionX - 1];
        const minX = partitionX === m ? Number.POSITIVE_INFINITY : nums1[partitionX];
        
        const maxY = partitionY === 0 ? Number.NEGATIVE_INFINITY : nums2[partitionY - 1];
        const minY = partitionY === n ? Number.POSITIVE_INFINITY : nums2[partitionY];

        if (maxX <= minY && maxY <= minX) {
            if (totalLength % 2 === 0) {
                // If the total length is even, return the average of the middle two elements
                return (Math.max(maxX, maxY) + Math.min(minX, minY)) / 2;
            } else {
                // If the total length is odd, return the middle element
                return Math.max(maxX, maxY);
            }
        } else if (maxX > minY) {
            // Move the partitionX to the left
            high = partitionX - 1;
        } else {
            // Move the partitionX to the right
            low = partitionX + 1;
        }
    }

    // This should not happen for valid inputs
    throw new Error("Input arrays are not sorted");
}

// Example usage:
const nums1_example1 = [1, 3];
const nums2_example1 = [2];
console.log(findMedianSortedArrays(nums1_example1, nums2_example1)); // Output: 2.00000

const nums1_example2 = [1, 2];
const nums2_example2 = [3, 4];
console.log(findMedianSortedArrays(nums1_example2, nums2_example2)); // Output: 2.50000
