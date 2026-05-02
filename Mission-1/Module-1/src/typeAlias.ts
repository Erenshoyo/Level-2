//? Type alias -> basically declaring the types in a single place to make it reusable.

//! By convention, we use capital letter to declare type alias.

type User = {
  id: number;
  name: {
    firstName: string;
    middleName?: string;
    lastName: string;
  };
  gender: "male" | "female";
  contactNo: string;
  address: {
    division: string;
    city: string;
  };
};

const user1: User = {
  id: 123,
  name: {
    firstName: "Asif",
    lastName: "Tauhid",
  },
  gender: "male",
  contactNo: "01900000000",
  address: {
    division: "Dhaka",
    city: "Gazipur",
  },
};
const user2: User = {
  id: 123,
  name: {
    firstName: "Atikur",
    lastName: "Antor",
  },
  gender: "male",
  contactNo: "01700000000",
  address: {
    division: "Dhaka",
    city: "Savar",
  },
};
const user3: User = {
  id: 123,
  name: {
    firstName: "Jannatul",
    lastName: "Moni",
  },
  gender: "female",
  contactNo: "01600000000",
  address: {
    division: "Dhaka",
    city: "Mymensingh",
  },
};

//? Type alias in function.

type AddFunc = (num1: number, num2: number) => number;

const add: AddFunc = (num1, num2) => num1 + num2;
