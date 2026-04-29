// ? Stateless vs Stateful

// * Stateful -> can contain data -> JS Objects...
// * Stateless -> cannot comntain data -> functions...
// * Lexical Environment -> Environment(Anything) inside a function.
// * Method -> function inside an object.

const counter = (amount) => {
  let count = 0;

  count += amount;

  return count;
};

// console.log(counter(3));
// console.log(counter(2));

const counter2 = {
  count: 0,

  // * add() is a method.
  add(amount) {
    this.count += amount;
  },

  print() {
    console.log(this.count);
  },
};

counter2.add(2);
counter2.add(3);
counter2.print();
