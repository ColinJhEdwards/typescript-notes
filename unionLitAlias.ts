// type alias, think of as custom types. here we can replace input1/2 type with Combinable
type Combinable = number | string;
// type alias can also be used for literal types
type ConversionDesc = "as-number" | "as-text";

function combine(
  // instead of giving input1 and input2 a type of "any" we can give them a union type to specify the input can be
  // either a number or string
  input1: number | string,
  input2: number | string,
  // literal types are similar to union types as seen in "resultType" however here we are saying the value
  // will be a string, but only the string values listed(as-number/as-text)
  // this is useful because when assigning a value to resultType, if we ever mispell the value ts will return an error
  resultType: "as-number" | "as-text"
) {
  let result;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultType === "as-number"
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  //   if (resultType === "as-number") {
  //     return +result;
  //   } else {
  //     return result.toString();
  //   }
}

const combinedAges = combine(30, 26, "as-number");
console.log(combinedAges);

const combinedStringAges = combine("20", "25", "as-number");
console.log(combinedStringAges);

const combinedNames = combine("max", "anna", "as-text");
console.log(combinedNames);
