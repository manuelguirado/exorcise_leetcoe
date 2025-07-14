function generateParenthesis(n: number): string[] {
    const result: string[] = [];
    const paraenthesis = (current: string, open: number, close: number) => {
        if (current.length === n * 2) {
            result.push(current);
            return;
        }
        if (open < n) {
            paraenthesis(current + '(', open + 1, close);
        }
        if (close < open) {
            paraenthesis(current + ')', open, close + 1);
        }
    }
    paraenthesis('', 0, 0);
    return result;
};
let numero = 3;
let resultado = generateParenthesis(numero);
console.log("Combinaciones de paréntesis:");
console.log(resultado);