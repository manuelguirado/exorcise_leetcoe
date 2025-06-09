function twoSum(nums: number[], target: number): number[] {
   const numToIndex: { [key: number]: number } = {};
   for ( let i =0 ; i < nums.length; i++){
         const complement = target - nums[i];
         if (numToIndex.hasOwnProperty(complement)) {
              return [numToIndex[complement], i];
         }
         numToIndex[nums[i]] = i;
   }
   throw new Error("No two sum solution");
};
let nums = [2, 7, 11, 15];
let target = 9;
console.log(twoSum(nums, target)); // Output: [0, 1]