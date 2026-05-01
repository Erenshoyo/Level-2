//? Array, objects is TS.

let marketList: string[] = ["eggs", "milk", "sugar"]; // ! We need to use a '[]' after the type(here 'string')
// ! to indicate that it's an array of the said type.
//marketList.push(12) //! IDE won't let me push a number or any other type of data here in TS.

let mixedArr: (string | number)[] = ["eggs", 12, "milk", 1, "suger", 2]; //! Example of mixed array.

mixedArr.push("Apple"); //! we can push the mixed types of data (Here only string and number as the array only contains strings and numbers)

//? Tuple: a special TS type.

// let coordinates: [number, number] = [20, 30, 30]; //! Type '[number, number, number]' is not assignable to type '[number, number]'.
//!  Source has 3 element(s) but target allows only 2.

let nameAndRoll: [string, number] = ["Tauhid", 3548]; //! The declared pattern must be followed thoroughly

//! "Tuple" can be more then two.

let destination: [string, string, number] = ["Dhaka", "chattogram", 3]; //! An example of three element TUPLE

//? Reference type : object

//! If we define a type it becomes required by default for us to use that Type.
// const user: {
//   //organization: string;
//   organization: "North South University"; //!Defining a value as a type.
//   firstName: string;
//   middleName?: string; //! optional type define. Just need to place a "?" mark after the declaration.
//   lastName: string;
//   isMarried: boolean;
// } = {
//   organization: "North South University",
//   firstName: "Asif",
//   //middleName: "Shahriar", //! Now it doesn't show error when we remove middleName, as it is now an optional type.
//   lastName: "Tauhid",
//   isMarried: false,
// };

// // user.organization = "NSU"; //! Now it's not assignable as we used a value as a type.

// console.log(user);

const user: {
  //organization: string;
  readonly organization: string; //! Access modifiers???
  firstName: string;
  middleName?: string; //! optional type define. Just need to place a "?" mark after the declaration.
  lastName: string;
  isMarried: boolean;
} = {
  organization: "North South University",
  firstName: "Asif",
  //middleName: "Shahriar", //! Now it doesn't show error when we remove middleName, as it is now an optional type.
  lastName: "Tauhid",
  isMarried: false,
};

// user.organization = "NSU"; //! Now it's not assignable as it is a readOnly type.

console.log(user);
