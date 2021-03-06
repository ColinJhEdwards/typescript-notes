// When creating an object the type can be given a value of {} where you can insert the expected values and their types
// const person: {
//     name: string;
//     age: number;
//   } = {
//     name: "Colin",
//     age: 26,
//   };

// However it is better to let typescript infer this on its own.
const person: {
  name: string;
  age: number;
  hobbies: string[];
  // this is how you declare a tuple as a type. Length of 2 elements - 1st element is a number 2nd is a string
  role: [number, string];
} = {
  name: "Colin",
  age: 26,
  hobbies: ["Running", "Guitar", "Reading", "Coding"],
  //   tuple comes in handy for cases such as role as seen below, what if we only want an id and a role but we try to
  //  change the value of role to a number? With tuple we can declare that this array will
  // always have a length of 2 with a number and string
  role: [2, "Musician"],
};

// this type value tells typescript that this variable will be an array of strings.
// If you want the array to have any value use any[] <-- use sparingly
let favoriteActivities: string[] = ["Swimming", "Playing Music"];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}

// Creating new object to use for enum example

// the enum below will assign ADMIN = 1, READ_ONLY = 2, AUTHOR = 3
// (See the js version of this code to see the perks of using enum)

enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

const personTwo = {
  name: "Paul",
  age: 29,
  hobbies: ["Video Games", "Sonic", "Disney"],
  role: Role.ADMIN,
};
