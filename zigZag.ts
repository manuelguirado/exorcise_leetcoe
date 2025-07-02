function convert(s: string, numRows: number): string {
    if (numRows === 1 || numRows >= s.length) return s;

    const rows: string[] = Array.from({ length: Math.min(numRows, s.length) }, () => "");
    let currentRow = 0;
    let goingDown = false;

    for (const char of s) {
        rows[currentRow] += char;
        if (currentRow === 0) goingDown = true;
        if (currentRow === numRows - 1) goingDown = false;
        currentRow += goingDown ? 1 : -1;
    }

    return rows.join("");
};
// Example usage:
// console.log(convert("PAYPALISHIRING", 3)); // Output: "PA
let string = " PAYPALISHIRING";
console.log(convert(string, 3)); // Output: "PAHNAPLSIIGYIR"