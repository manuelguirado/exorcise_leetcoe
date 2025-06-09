function longestCommonPrefix(strs: string[]): string {
     if ( strs.length === 0) return "";
    let prefs = strs[0];
    for (let i = 1; i < strs.length;i++){
        while (strs[i].indexOf(prefs) !== 0) {
            prefs = prefs.substring(0, prefs.length - 1);
            if (prefs === "") return "";
            
        }
    }
    return prefs;
};
let stringArray = ["dog", "flour", "flower"];
console.log(longestCommonPrefix(stringArray)); // Output: "fl"