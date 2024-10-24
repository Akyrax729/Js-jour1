// EX 9

let nombre = 12

function sumOfDigit(num) {
    return num.toString().split("")
        .reduce((sum, digit) =>
            sum + parseInt(digit), 0);
}
console.log(sumOfDigit(nombre));
