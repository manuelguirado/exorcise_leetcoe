function removeElement(nums: number[], val: number): number {
    let num = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[num] = nums[i];
            num++;
        }
    }
    return num;
};
// Example usage:
const nums2 = [3, 2, 2, 3];
const val2 = 3;
const newLength2 = removeElement(nums2, val2);
console.log(newLength2); // Output: 2