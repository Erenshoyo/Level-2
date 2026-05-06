//? OOP -> Polymorphism - related to methods

class Person {
  getSleep() {
    console.log(`I am a normal happy person and I sleep for 8 hours`);
  }
}

class Student extends Person {
  getSleep() {
    console.log(`I am a student. I sleep 7 hours`);
  }
}

class NextDeveloper extends Person {
  getSleep() {
    console.log(` I sleep for 6 hours.`);
  }
}

const getSleepingHours = (param: Person) => {
  param.getSleep();
};

const person = new Person();
const student = new Student();
const nextDeveloper = new NextDeveloper();

getSleepingHours(person);
getSleepingHours(student);
getSleepingHours(nextDeveloper);

class Shape {
  getArea(): number {
    return 0;
  }
}

class Circle extends Shape {
  radius: number;

  constructor(radius: number) {
    super();
    this.radius = radius;
  }

  getArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}

class Rectangle extends Shape {
  height: number;
  width: number;

  constructor(height: number, width: number) {
    super();
    this.height = height;
    this.width = width;
  }
  getArea(): number {
    return this.height * this.width;
  }
}

const getArea = (param: Shape) => {
  console.log(param.getArea());
};

const circle = new Circle(5);
const rectangle = new Rectangle(4, 6);

getArea(circle);
getArea(rectangle);
