//? OOP -> Object Oriented Programming

class Animal {
  name: string;
  species: string;
  sound: string;

  constructor(name: string, species: string, sound: string) {
    this.name = name;
    this.species = species;
    this.sound = sound;
  }

  //* Function inside class/object is called method.
  makeSound() {
    const message: string = `The ${this.species} named ${this.name} is making ${this.sound} sound`;
    return message;
  }
}

//? Parameter properties --> makes the codebase cleaner.

class Animal2 {
//   name: string;
//   species: string;
//   sound: string;

  constructor(public name: string, public species: string, public sound: string) {
    // this.name = name;
    // this.species = species;
    // this.sound = sound;
  }

  //* Function inside class/object is called method.
  makeSound() {
    const message: string = `The ${this.species} named ${this.name} is making ${this.sound} sound`;
    return message;
  }
}


const cat = new Animal("Dholu", "cat", "meow");

console.log(cat.name, cat.species, cat.sound, cat.makeSound());
