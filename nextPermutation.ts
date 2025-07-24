/**
 Do not return anything, modify nums in-place instead.
 */
function nextPermutation(nums: number[]): void {
    const n = nums.length;
    let i = n - 2;

    // Find the first decreasing element from the end
    while (i >= 0 && nums[i] >= nums[i + 1]) {
        i--;
    }

    if (i >= 0) {
        let j = n - 1;
        // Find the element just larger than nums[i]
        while (j > i && nums[j] <= nums[i]) {
            j--;
        }
        // Swap elements at i and j
        [nums[i], nums[j]] = [nums[j], nums[i]];
    }

    // Reverse the elements after index i
    let left = i + 1;
    let right = n - 1;
    while (left < right) {
        [nums[left], nums[right]] = [nums[right], nums[left]];
        left++;
        right--;
    }
};
// Example usage:
const numbers = [1, 2, 3];
nextPermutation(numbers);
console.log(numbers); // Output: [1, 3, 2]