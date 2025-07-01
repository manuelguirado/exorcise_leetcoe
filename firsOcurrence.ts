function strStr(haystack: string, needle: string): number {
    if (!needle) return 0;

    for (let i = 0; i <= haystack.length - needle.length; i++) {
        if (haystack.slice(i, i + needle.length) === needle) {
            return i;
        }
    }
    return -1;
};
// Example usage:
console.log(strStr("hello", "ll")); // Output: 2
console.log(strStr("aaaaa", "bba")); // Output: -1
console.log(strStr("", "")); // Output: 0