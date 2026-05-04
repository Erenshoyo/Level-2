//? keyof -> is a type operator

type RichVehicles = {
  car: string; //! key: keyValue --> key-value pair
  bike: string;
  cng: string;
};

type MyVehicle1 = "bike" | "car" | "cng"; //*string literal type

type MyVehicle2 = keyof RichVehicles;

const myVehicle1: MyVehicle1 = "bike"; //! Accepts using string literal type
const myVehicle2: MyVehicle2 = "bike"; //! Also, accepts when keyof operator is used

//? keyof constraint...

type User = {
  id: number;
  name: string;
  address: {
    city: string;
  };
};
const user: User = {
  id: 156,
  name: "Tauhid",
  address: {
    city: "ctg",
  },
};

//* There are a lot of conventions.

// const myId = user.id; //* convention-1
const myId = user["id"]; //* convention-2
const myName = user["name"]; //* convention-2
const myAddress = user["address"]; //* convention-2

console.log({ myId, myName, myAddress });

//* Used keyof
const getPropertyFromObj = <T>(obj: T, key: keyof T) => {
  return obj[key];
};

const res1 = getPropertyFromObj(user, "id");
console.log(res1);

const product = {
  brand: "HP",
};
const res2 = getPropertyFromObj(product, "brand");
console.log(res2);
