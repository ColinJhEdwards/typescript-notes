// When creating an object the type can be given a value of {} where you can insert the expected values and their types
// const person: {
//     name: string;
//     age: number;
//   } = {
//     name: "Colin",
//     age: 26,
//   };

// However it is better to let typescript infer this on its own.
const person = {
  name: "Colin",
  age: 26,
};

console.log(person.name);
