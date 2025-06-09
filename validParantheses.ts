function isValid(s: string): boolean {
  let characters: { [key: string]: string } = {
    '(': ')',
    '{': '}',
    '[': ']'
  };
  let stack: string[] = [];
    for ( let i =0; i < s.length; i++){
        let currentChar = s[i];
        if (characters.hasOwnProperty(currentChar)) {
            stack.push(characters[currentChar]);
        }else{
            if (stack.length === 0 || stack[stack.length - 1] !== currentChar) {
                return false;
            }
            stack.pop();
        }
    }
    return stack.length === 0;
  }  
let inputString = "({[]})";
console.log(isValid(inputString)); // Output: true