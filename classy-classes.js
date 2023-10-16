// Classy Classes
// Basic Classes, this kata is mainly aimed at the new JS ES6 Update introducing classes

// Task
// Your task is to complete this Class, the Person class has been created. You must fill in the Constructor method to accept a name as string and an age as number, complete the get Info property and getInfo method/Info getter which should return johns age is 34

class Person {
    // We'll start by filling in the 'constructor' function with the parameters
    // of 'name' and 'age'
    constructor(name, age) {
      // Next, we'll attach 'this' to each
      this.name = name;
      this.age = age;
    };
    // Now we'll create 'get info()' which will return the correct statement
    get info() {
      return `${this.name}s age is ${this.age}`;
    };
};