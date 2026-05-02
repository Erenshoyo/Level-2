//? Special types: Nullable, never and Unknown

//? Nullable type
const getUser = (input: string | null) => {
  if (input) {
    console.log(`From DB: ${input}`);
  } else {
    console.log(`From Db: ALL USER`);
  }
};

getUser(null);

//? Unknown type

const discountCalculator = (input: unknown) => {
  if (typeof input === "number") {
    const discountedPrice = input * 0.1;
    console.log(discountedPrice);
  } else if (typeof input === "string") {
    const [discountedPrice] = input.split(" "); //! split return an array.
    console.log(Number(discountedPrice) * 0.1); //! Converted the string into number
  } else {
    console.log("Wrong Input");
  }
};

discountCalculator(100);
discountCalculator("100 TK");
discountCalculator(null);

//? Never type

const throwError = (msg: string):never => { //! never type doesn't return anything.
  throw new Error(msg);
};

throwError('Error...')
