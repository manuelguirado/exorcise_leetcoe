function myAtoi(s: string): number {
    s = s.trim();
    if (s.length === 0) return 0;

    let sign = 1;
    let i = 0;
    if (s[i] === '-') {
        sign = -1;
        i++;
    } else if (s[i] === '+') {
        i++;
    }

    let num = 0;
    while (i < s.length && s[i] >= '0' && s[i] <= '9') {
        num = num * 10 + (s[i].charCodeAt(0) - '0'.charCodeAt(0));
        i++;
    }

    num *= sign;
    if (num < -2147483648) return -2147483648;
    if (num > 2147483647) return 2147483647;
    return num;
};
let str = "   -42";
console.log(myAtoi(str)); // Output: -42
let str2 = "4193 with words";
console.log(myAtoi(str2)); // Output: 4193