// functions have types, notice when hovering over this function ts infers that a number will be returned
function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log("Result: ".concat(num));
}
printResult(add(5, 12));
