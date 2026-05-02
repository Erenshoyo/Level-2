//? Ternary, Nullish Coalescing & Optional Chaining operator ( ? )

//? Ternary( ? ) -> helps us to take decisions(decision making)

const userAge = 21;

const isEligible = (age: number) => {
  //   if (age >= 21) console.log("You are eligible.");
  //   else console.log("You are not eligible");

  const result = age >= 21 ? "You are eligible" : "You are not eligible";

  console.log(result);
};

isEligible(21);
isEligible(20);

//? Nullish Coalescing (??) -> works based on null/undefined value. Doesn't work on other values.

const userTheme = undefined;
const selectedTheme = userTheme ?? "Light";

console.log(selectedTheme);

const isAuthenticated = "";

const resultternary = isAuthenticated
  ? isAuthenticated
  : "You are a guest user";

const resultWithNullish = isAuthenticated ?? "You are a guest user";

console.log({ resultternary }, { resultWithNullish });

//? Optional Chaining (?.?.?)

const user: {
  address: {
    city: string;
    town: string;
    postalCode?: string;
  };
} = {
  address: {
    city: "Banani",
    town: "Brac Town",
  },
};

const postalCode = user?.address?.postalCode;
console.log(postalCode);
