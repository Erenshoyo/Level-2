//? Inheritance

class Person {
  name: string;
  age: number;
  address: string;

  constructor(name: string, age: number, address: string) {
    this.name = name;
    this.age = age;
    this.address = address;
  }

  getSleep(numOfHours: number) {
    console.log(`${this.name} sleeps ${numOfHours} hours!!!`);
  }
}

class Student extends Person {}

const student1 = new Student(`Tauhid`, 24, `Gazipur`);

student1.getSleep(15);

class Teacher extends Person {
  designation: string; //! Extra property.

  constructor(name: string, age: number, address: string, designation: string) {
    super(name, age, address);
    this.designation = designation;
  }

  takesClass(numOfHours: number) {
    console.log(`${this.name} teaches ${numOfHours} hours!!!`);
  }
}

const teacher = new Teacher("Asif", 35, "Gazipur", "Junior Teacher");

teacher.takesClass(4);
