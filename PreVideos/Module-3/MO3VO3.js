//? Stack -> LIFO - Last In First Out

class Stack {
  constructor() {
    this.items = [];
  }

  push(value) {
    this.items.push(value);
  }

  pop() {
    if (this.isEmpty()) return undefined;

    this.items.pop();
  }

  peek() {
    if (this.isEmpty()) return undefined;

    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  print() {
    console.log(this.items);
  }
}

const stack = new Stack();

console.log(stack.peek());
console.log(stack.isEmpty());

stack.push(10);
stack.push(20);
stack.push(30);

stack.print();
console.log(stack.peek());

console.log(stack.pop());

stack.print();
console.log(stack.peek());
