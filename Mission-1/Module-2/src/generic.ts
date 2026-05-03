//? Genereics -> To dynamically generalize something.

//? Generics in array

type GenericArray<T> = Array<T>;

// const friends: string[] = ["Asif", "Shahriar", "Tauhid"];
const friends: GenericArray<string> = ["Asif", "Shahriar", "Tauhid"];

// const rollNumber: number[] = [4, 5, 10];
const rollNumber: GenericArray<number> = [4, 5, 10];

// const isEligibleList: boolean[] = [true, false, true];
const isEligibleList: GenericArray<boolean> = [true, false, true];

type Coordinates<X, Y> = [X, Y];
const coordinates1: Coordinates<number, number> = [20, 30];
const coordinates2: Coordinates<string, string> = ["20", "30"];

//? Generics in array of objects

//! We cannot use generics like this -"const userList: GenericArray<objects>", if done this way it generalizes the whole array of object.
//* This is the proper way -> "const userList: GenericArray<{ name: string; age: number }>", we need to mention the element types like in the example.
//* A better approach would be to define the types separately and use them inside the generics array.

type User = {
  name: string;
  age: number;
};
const userList: GenericArray<User> = [
  {
    name: "Asif Shahriar",
    age: 22,
  },
  {
    name: "Tauhid",
    age: 24,
  },
];
