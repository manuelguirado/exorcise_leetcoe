function threeSum(nums: number[]): number[][] {
    nums.sort((a, b) => a - b); // Sort array first
    const result: number[][] = [];
    
    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue; // Skip duplicates for the first number
        let left = i + 1;
        let right = nums.length - 1;
        

        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];
         
            if (left > i + 1 && nums[left] === nums[left - 1]) {
                left++; // Skip duplicates for the second number
                continue;
            }
            if (right < nums.length - 1 && nums[right] === nums[right + 1]) {
                right--; // Skip duplicates for the third number
                continue;
            }
            if (sum === 0) {
                // Found a triplet
               
                result.push([nums[i], nums[left], nums[right]]);
                left++;
                right--;
            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }
    return result;
}
let nums1 = [-1, 0, 1, 2, -1, -4];
let result = threeSum(nums1);
console.log(result); // Output [] the triplet [-1, -1, 2] is not returned because it is not unique
let nums4 = [0, 1, 1];
result = threeSum(nums4);
console.log(result); // Output: []
let nums3 = [0, 0, 0];
result = threeSum(nums3);
console.log(result); // Output: [[0, 0, 0]]