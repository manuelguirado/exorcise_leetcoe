function fourSum(nums: number[], target: number): number[][] {
    const result: number[][] = [];
    const seen: Set<string> = new Set();

    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length - 3; i++) {
        for (let j = i + 1; j < nums.length - 2; j++) {
            let left = j + 1;
            let right = nums.length - 1;

            while (left < right) {
                const sum = nums[i] + nums[j] + nums[left] + nums[right];
                if (sum === target) {
                    const quad = [nums[i], nums[j], nums[left], nums[right]];
                    const key = quad.join(',');
                    if (!seen.has(key)) {
                        result.push(quad);
                        seen.add(key);
                    }
                    left++;
                    right--;
                } else if (sum < target) {
                    left++;
                } else {
                    right--;
                }
            }
        }
    }

    return result;
};
let input = `[[1, 0, -1, 0, -2, 2], 0]`;
let  object = 2;
const parsedInput = JSON.parse(input);
console.log(fourSum(parsedInput[0], parsedInput[1]));
