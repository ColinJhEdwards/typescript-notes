function combine(
// instead of giving input1 and input2 a type of "any" we can give them a union type to specify the input can be
// either a number or string
input1, input2, 
// literal types are similar to union types as seen in "resultType" however here we are saying the value
// will be a string, but only the string values listed(as-number/as-text)
// this is useful because when assigning a value to resultType, if we ever mispell the value ts will return an error
resultType) {
    var result;
    if ((typeof input1 === "number" && typeof input2 === "number") ||
        resultType === "as-number") {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    //   if (resultType === "as-number") {
    //     return +result;
    //   } else {
    //     return result.toString();
    //   }
}
var combinedAges = combine(30, 26, "as-number");
console.log(combinedAges);
var combinedStringAges = combine("20", "25", "as-number");
console.log(combinedStringAges);
var combinedNames = combine("max", "anna", "as-text");
console.log(combinedNames);
