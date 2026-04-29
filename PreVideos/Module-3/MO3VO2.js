// ? Basic Class constructor and methods refresher

//! not a good approach of making a stateless into a stateful counterpart.
let count = 0;

const counter = (amount) => {
  count += amount;

  return count;
};

console.log(3);
console.log(2);

//! a bit better approach but still not recommended.
const createCounter = () => {
  let count = 0;

  return (amount) => {
    count += amount;
    return count;
  };
};

const counter2 = createCounter();

console.log(counter2(3));
console.log(counter2(5));

//! using class (OOP)
class Counter {
  constructor(count) {
    this.count = count; //! this.count -> variable inside constructor.
  }
  add(amount) {
    this.count += amount;
  }
  print() {
    console.log(this.count);
  }
}

const counter3 = new Counter(0); //! 0 is the initial value.

counter3.print();
