//? Interface -> kinda like Type alias, not entirely.

type User = {
  name: string;
  age: number;
};

// * This is an example of how interface is written.
interface IUser {
  name: string;
  age: number;
}

type Role = {
  role: "admin" | "user";
};
//! Using interface
interface IUserWithRole extends IUser {
  role: "admin" | "user";
}

//! Using type alias
type UserWithRole = User & Role;

const user1: UserWithRole = {
  name: "Asif",
  age: 24,
  role: "admin",
};

const user2: IUserWithRole = {
  name: "Tauhid",
  age: 25,
  role: "user",
};

//! We cannont declare primitive types in interface.
//! Interface only works with Array, onjects and functions

//? Functon and interface usage.

//!Using type alias
type Add = (num1: number, num2: number) => number;
const add: Add = (num1, num2) => num1 + num2;

//!Using interface
interface Iadd {
  (num1: number, num2: number): number;
}

const add2: Iadd = (num1, num2) => num1 + num2;

interface IFriends {
  [index: number]: string;
}

const friends: IFriends = ["A", "B", "C"];

//! Recommend to use interface in Objects
