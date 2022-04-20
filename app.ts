// instead of giving input1 and input2 a type of "any" we can give them a union type to specify the input can be
// either a number or string
function combine(input1: number | string, input2: number | string) {
  let result;
  if (typeof input1 === "number" && typeof input2 === "number") {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

// instead of giving input1 and input2 a type of any we can give them a union type to speficy the input can be
// either a number or string
const combinedAges = combine(30, 26);
console.log(combinedAges);

const combinedNames = combine("max", "anna");
console.log(combinedNames);
