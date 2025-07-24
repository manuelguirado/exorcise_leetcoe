function search(nums: number[], target: number): number {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) {
            return mid;
        }

        // Check if the left side is sorted
        if (nums[left] <= nums[mid]) {
            // Target is in the left half
            if (nums[left] <= target && target < nums[mid]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        } else {
            // Right side is sorted
            if (nums[mid] < target && target <= nums[right]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }

    return -1; // Target not found
};
let numbersArrray = [4, 5, 6, 7, 0, 1, 2];
let targetnum = 0;
console.log(search(numbersArrray, targetnum)); // Output: 4