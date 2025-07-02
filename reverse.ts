function reverse(x: number): number {
    const isNegative = x < 0;
    const reversedStr = Math.abs(x).toString().split('').reverse().join('');
    const reversedNum = parseInt(reversedStr, 10);

    if (reversedNum > 2**31 - 1) {
        return 0; // Return 0 if the reversed number exceeds the 32-bit signed integer range
    }

    return isNegative ? -reversedNum : reversedNum;
};
// Example usage:
console.log(reverse(123));    // Output: 321
console.log(reverse(-123));   // Output: -321
console.log(reverse(120));    // Output: 21
console.log(reverse(0));      // Output: 0
console.log(reverse(1534236469)); // Output: 0 (exceeds 32-bit signed integer range)
console.log(reverse(-2147483648)); // Output: 0 (exceeds 32-bit signed integer range)
console.log(reverse(1000000001)); // Output