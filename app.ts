// functions have types, notice when hovering over this function ts infers that a number will be returned
function add(n1: number, n2: number) {
  return n1 + n2;
}

// void type, this functions doesnt return anything
function printResult(num: number): void {
  console.log(`Result: ${num}`);
}

printResult(add(5, 12));
