// functions have types, notice when hovering over this function ts infers that a number will be returned
function add(n1, n2) {
    return n1 + n2;
}
// void type, this functions doesnt return anything
function printResult(num) {
    console.log("Result: ".concat(num));
}
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
// Function can be used as a type, here we use arrow function syntax and show that the function should return a number
// we also specify that the parameters must exist and be numbers
var combineValues;
combineValues = add;
console.log(combineValues(8, 8));
printResult(add(5, 12));
addAndHandle(10, 20, function (result) {
    console.log(result);
});
