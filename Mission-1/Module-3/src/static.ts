//? Static in Typescript

class Counter {
  static count: number = 0; //! Now the counter is static, so the reference will always be from here.

  increment() {
    //return (this.count += 1); //! As count is now a static property, "this" keyword cannont be used here.
    return (Counter.count += 1); //! We need to access or modify the count property like this as it is a static value.
  }
  decrement() {
    // return (this.count -= 1); //! As count is now a static property, "this" keyword cannont be used here.
    return (Counter.count -= 1); //! We need to access or modify the count property like this as it is a static value.
  }
}

const instance1 = new Counter(); //! woking in a memory, saving the value of the count when the count was not static. But now it's refering from a single memory.
console.log(instance1.increment());
console.log(instance1.increment());
console.log(instance1.increment());
console.log(instance1.increment());
console.log(instance1.increment());

const instance2 = new Counter(); //!  woking in a different memory, also saving the value of the count. But now it's refering from a single memory same as instance1.
console.log(instance2.increment());
console.log(instance2.increment());
console.log(instance2.increment());
console.log(instance2.increment());

//! the methods can also be made into static methods
//! ex: static increment() {
//!    //return (this.count += 1);
//!    return (Counter.count += 1);
//!  }

//! when we do this, then we can call the method like this:
//! conosle.log(Counter.increment());
