// * Stateless vs Stateful

//! Stateful -> can contain data -> JS Objects...
//! Stateless -> cannot comntain data -> functions...

const counter = (amount) => {
  let count = 0;

  count += amount;

  return count;
};

console.log(counter(3));
console.log(counter(2));
