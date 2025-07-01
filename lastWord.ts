function lengthOfLastWord(s: string): number {
    const words = s.trim().split(" ");
    return words.length > 0 ? words[words.length - 1].length : 0;
};
// Example usage:
console.log(lengthOfLastWord("Hello World")); // Output: 5
console.log(lengthOfLastWord("   fly me   to   the moon  ")); // Output: 4
console.log(lengthOfLastWord("luffy is still joyboy")); // Output: 6