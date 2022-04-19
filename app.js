console.log("Hello TypeScript");
// working with types
// CORE TYPES
// Number - Only one number type in js&ts (1, 5.3, -10) all these are typeof number
// String - can be defined with single quotes, double quotes, or back ticks. Simply text.
// Boolean - true/false
function add(n1, n2, showResult, phrase) {
    if (showResult) {
        console.log(phrase + n1 + n2);
    }
    else {
        return n1 + n2;
    }
}
var number1 = 5;
var number2 = 3;
var printResult = true;
var phrase = "Result is: ";
add(number1, number2, printResult, phrase);
