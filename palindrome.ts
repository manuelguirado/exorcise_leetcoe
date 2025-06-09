function isPalindrome(x : number) : boolean {
    for (let i =0, j = x.toString().length -1; i < j;  i++,j--){
        if (x.toString()[i] !== x.toString()[j]) {
            return false;
        }
    }
    return true;
}
let number :number = 121;
console.log(isPalindrome(number)); // Output: true