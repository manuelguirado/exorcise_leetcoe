function romanToInt(s: string): number {
    
    const romanNumbers: { [key: string]: number } = {
         'I': 1,
         'V': 5,
         'X': 10,
         'L': 50,
         'C': 100,
         'D': 500,
         'M': 1000
    };
    let total = 0
   for ( let i =0; i < s.length; i++){
       const current = romanNumbers[s[i]];
       const next = romanNumbers[s[i + 1]];
       if (next && current < next) {
           total -= current;
       } else {
           total += current;
       }
   }
   return total;
};
let romanString = "MCMXCIV";
console.log(romanToInt(romanString)); // Output: 1994