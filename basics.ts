console.log("Hello TypeScript");
// working with types
// CORE TYPES
// Number - Only one number type in js&ts (1, 5.3, -10) all these are typeof number
// String - can be defined with single quotes, double quotes, or back ticks. Simply text.
// Boolean - true/false
// Object - {name: colin, age: 26}
// Arrays - [1 , 2 , 3]

// Types added by typescript
// Tuple - [1,2] fixed length and type array
// Enum - enum {NEW, OLD}
// Union - string | number, allows you to specify two types if needed
// Literal - similar to union but can specify what values have to be - Ex. Time: "AM" | "PM"
// Unknown - Used when we are unsure what a given variable may be, could be from a user input etc.. use sparingyly
// Never - useful for when a function for example will never return a value

// compoling files
// tsc "filename" will compile the entered file name, not very useful for larger projects though

function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  const result = n1 + n2;
  if (showResult) {
    console.log(phrase + result);
  } else {
    return result;
  }
}

const number1 = 5;
const number2 = 3;
const printResult = true;
const phrase = "Result is: ";

add(number1, number2, printResult, phrase);
