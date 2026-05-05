//? OOP -> instace of type guard/ type narrowing

//! Using this class as a type later in getUserInfo.
class Person {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  getSleep(hours: number) {
    console.log(`${this.name} sleeps ${hours} hours daily`);
  }
}

//! By convetion, we use class name in capital(Only first letter)
class Students extends Person {
  constructor(name: string) {
    super(name);
  }

  doStudy(hours: number) {
    console.log(`${this.name} studies ${hours} hours daily.`);
  }
}

class Teacher extends Person {
  constructor(name: string) {
    super(name);
  }

  takeClass(hours: number) {
    console.log(`${this.name} teaches ${hours} hours daily.`);
  }
}

//* Function guard

const isStudent = (user: Person) => {
  return user instanceof Students; // user is student
};

const isTeacher = (user: Person) => {
  return user instanceof Teacher; // user is teacher
};

//! Using class Person as a type here.
const getUserInfo = (user: Person) => {
  if (isStudent(user)) {
    user.doStudy(5);
  } else if (isTeacher(user)) {
    user.takeClass(4);
  } else {
    user.getSleep(6);
  }
};

//! When we create an object from a class, we call it an "Instance" of that class.
const student1 = new Students("Asif");
const teacher1 = new Teacher("Tauhid");
const person1 = new Person("Shahriar");

getUserInfo(student1);
getUserInfo(teacher1);
getUserInfo(person1);
