class Cat {
  constructor(name) {
    this.name = name;
    this.say = "meow";
  }
}

class Dog {
  constructor(name) {
    this.name = name;
    this.say = "woof";
  }
}

class Parrot {
  constructor(name) {
    this.name = name;
    this.say = "tweet";
  }
}

export default class AnimalFactory {
  static classes = {
    cat: Cat,
    dog: Dog,
    parrot: Parrot,
  };

  create(name, type = "cat") {
    const animalClass =
      AnimalFactory.classes[type] || AnimalFactory.classes["cat"];
    const animal = new animalClass(name);
    animal.type = type;
    animal.define = () => {
      console.log(
        `This is a ${this.type} called ${this.name}, ${this.say}-${this.say}`
      );
    };
    return animal;
  }
}
