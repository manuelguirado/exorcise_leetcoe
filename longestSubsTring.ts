function lengthOfLongestSubstring(s: string): number {
   let charMap = new Map<string, number>();
   let left = 0;
   let maxLength = 0;

   for (let right = 0; right < s.length; right++) {
       const currentChar = s[right];
       if (charMap.has(currentChar)) {
           left = Math.max(left, charMap.get(currentChar)! + 1);
       }
       charMap.set(currentChar, right);
       maxLength = Math.max(maxLength, right - left + 1);
   }

   return maxLength;
};
console.log(lengthOfLongestSubstring("abcabcbb")); // Output: 3
console.log(lengthOfLongestSubstring("bbbbb"));    // Output: 1
console.log(lengthOfLongestSubstring("pwwkew"));   // Output: 3
console.log(lengthOfLongestSubstring(""));          // Output: 0
console.log(lengthOfLongestSubstring("a"));         // Output: 1