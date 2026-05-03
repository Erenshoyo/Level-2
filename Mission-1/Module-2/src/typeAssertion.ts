//? Type assertion

let x1: any;
let x2: any;

x1 = 222;
x2 = "Asif Shahriar Tauhid";

(x1 as number).toFixed(); //! here we asserted the type 'any' to type 'number' using 'as' keyword.
(x2 as string).length; //! here we asserted the type 'any' to type 'string' using 'as' keyword.

const kgToGmConverter = (
  input: string | number,
): string | number | undefined => {
  if (typeof input === "number") return input * 1000;
  else if (typeof input === "string") {
    const [value] = input.split(" ");
    return `Converted output is: ${Number(value) * 1000}`;
  }
};

const x3 = kgToGmConverter(2) as number;
console.log(x3);
const x4 = kgToGmConverter("2 kg") as string;
console.log(x4);

//! We should only use type assertion when we are sure of the type.
type CustomError = {
  message: string;
};

try {
} catch (err) {
  console.log((err as CustomError).message); //! Creating a custom type and using it in Type Assertion.
}
