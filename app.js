// When creating an object the type can be given a value of {} where you can insert the expected values and their types
// const person: {
//     name: string;
//     age: number;
//   } = {
//     name: "Colin",
//     age: 26,
//   };
// However it is better to let typescript infer this on its own.
var person = {
    name: "Colin",
    age: 26,
    hobbies: ["Running", "Guitar", "Reading"]
};
// this type value tells typescript that this variable will be an array of strings.
// If you want the array to have any value use any[] <-- use sparingly
var favoriteActivities = ["Swimming", "Playing Music"];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
