//Problem 1

function filterEvenNumbers(nums: number[]) {
  const evenNumbers: number[] = nums.filter((num) => num % 2 === 0);
  return evenNumbers;
}

//Problem 2

function reverseString(input: string) {
  let stringReversed = "";
  for (let i = input.length - 1; i >= 0; i--) {
    stringReversed += input[i];
  }
  return stringReversed;
}

//Problem 3

type StringNumber = string | number;

function checkType(input: StringNumber) {
  if (typeof input === "string") {
    return "String";
  } else {
    return "Number";
  }
}

//Problem 4
function getProperty<T, K extends keyof T>(object: T, key: K) {
  return object[key];
}

//Problem 5

interface Book {
  title: string;
  author: string;
  publishedYear: number;
}

interface ReadBookStatus extends Book {
  isRead: boolean;
}
function toggleReadStatus(input: Book): ReadBookStatus {
  return {
    ...input,
    isRead: true,
  };
}

//Problem 6

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class Student extends Person {
  grade: string;

  constructor(name: string, age: number, grade: string) {
    super(name, age);
    this.grade = grade;
  }

  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
  }
}


//Problem 7

function getIntersection(set1: number[], set2: number[]) {
  const _set1 = new Set(set1);
  const _set2 = new Set(set2);

  const intersectionSet = [..._set1].filter((number) => _set2.has(number));
  return intersectionSet;
}
