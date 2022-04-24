//  unknow can be used for when we dont know what the user inputs will be, could be a number could be a string
let userInput: unknown;
let userName: string;

// string and number, but no error
userInput = 5;
userInput = "max";
// notice that userName is given the type of string therefor it cannot be given the value of userInput
// However if we use the type "any" this is fixed
if (typeof userInput === "string") {
  userName = userInput;
}
