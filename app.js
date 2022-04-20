// instead of giving input1 and input2 a type of "any" we can give them a union type to specify the input can be
// either a number or string
function combine(input1, input2) {
    var result;
    if (typeof input1 === "number" && typeof input2 === "number") {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
// instead of giving input1 and input2 a type of any we can give them a union type to speficy the input can be
// either a number or string
var combinedAges = combine(30, 26);
console.log(combinedAges);
var combinedNames = combine("max", "anna");
console.log(combinedNames);
