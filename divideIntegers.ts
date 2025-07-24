function divide(dividend: number, divisor: number): number {
    if (divisor === 0) {
        throw new Error("Division by zero is not allowed");
    }
    if (dividend === 0) {
        return 0;
    }
    
    // Define 32-bit integer limits
    const INT_MAX = 2147483647;
    const INT_MIN = -2147483648;
    
    let truncatedResult = Math.trunc(dividend / divisor);
    
    // Handle overflow: clamp result to 32-bit integer range
    if (truncatedResult > INT_MAX) {
        return INT_MAX;
    }
    if (truncatedResult < INT_MIN) {
        return INT_MIN;
    }
    
    return truncatedResult;
}

let divisor = -1;
let dividend = -2147483648;
let resultDivide = divide(dividend, divisor);
console.log(`The result of dividing ${dividend} by ${divisor} is ${resultDivide}`);