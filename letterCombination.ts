function letterCombinations(digits: string): string[] {
    let result: string[] = [];
    if (!digits) return result;
    let digitToLetters: { [key: string]: string } = {
        '2': 'abc',
        '3': 'def',
        '4': 'ghi',
        '5': 'jkl',
        '6': 'mno',
        '7': 'pqrs',
        '8': 'tuv',
        '9': 'wxyz' 
    };
    const backtrack = (index: number, path: string) => {
        if (index === digits.length) {
            result.push(path);
            return;
        }
        const digit = digits[index];
        const letters = digitToLetters[digit];
        for (let letter of letters) {
            backtrack(index + 1, path + letter);
        }
    };
    backtrack(0, '');
    return result;
};
let digits = "23";
console.log(letterCombinations(digits)); // Output: ["ad","ae","af","bd