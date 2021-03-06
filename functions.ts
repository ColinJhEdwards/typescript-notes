// functions have types, notice when hovering over this function ts infers that a number will be returned
function add(n1: number, n2: number) {
  return n1 + n2;
}

// void type, this functions doesnt return anything
function printResult(num: number): void {
  console.log(`Result: ${num}`);
}

// Function can be used as a type, here we use arrow function syntax and show that the function should return a number
// we also specify that the parameters must exist and be numbers
let combineValues: (a: number, b: number) => number;

combineValues = add;

console.log(combineValues(8, 8));

printResult(add(5, 12));

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

addAndHandle(10, 20, (result) => {
  console.log(result);
});
