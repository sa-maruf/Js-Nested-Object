function dub(num) {
    return num * 2;
}
let results = dub(50);
console.log(results);


//02 normal function
function pot(a, b, c) {
    let gug = a + b + c;
    let gun = gug * 5;
    let bioug = gun - c;
    let bag = bioug / a;
    let res = bag;
    return res;
}
let result = pot(10, 12, 20)
console.log(result);


// 03 Conditional function 
function num(a) {
    if (a % 2 === 0) {
        return "Even"
    } else {
        return "Odd"
    }
}
let result2 = num(42)
console.log(result2);


// 04 calculator
function calculator(a, operation, b) {
    if (operation === '+') {
        return a + b;
    }
    else if (operation === '-') {
        return a - b;
    }
    else if (operation === '*') {
        return a * b;
    }
    else if (operation === '/') {
        if (a !== 0 && b !== 0) {
            return a / b;
        } else {
            return 'Error';
        }
    }
    else {
        return 'Error';
    }
}
let result3 = calculator(6, '+', 44,)
console.log(result3);
