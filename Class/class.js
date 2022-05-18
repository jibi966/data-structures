// Inheritence

// class Car {
//   constructor(name, model) {
//     this.name = name;
//     this.model = model;
//   }
//   showDetail() {
//     console.log(this.name + ":" + this.model);
//   }
// }

// class SUV extends Car {
//   constructor(name, model) {
//     super(name, model);
//     this.owner = "Jibi";
//   }
// }

// class miniSUV extends SUV {
//   constructor(name, model) {
//     super(name, model);
//     this.type = "mini";
//   }
// }

// const car1 = new SUV("JEEP", "Compass");
// console.log("car1:", car1);

// const car2 = new miniSUV("JEEP", "Compass");
// console.log("car2:", car2);

// Encapsulation

// class Employee {
//   constructor() {
//     var name;
//     var rating;
//   }

//   getName() {
//     return this.name;
//   }
//   setName(name) {
//     this.name = name;
//   }
//   getRating() {
//     return this.rating;
//   }
//   setRating(rating) {
//     this.rating = rating;
//   }
// }

// const emp1 = new Employee();

// emp1.setName("Jibi");
// emp1.setRating(2);
// console.log(emp1.getName());
// console.log(emp1.getRating());

// Abstraction

class User {
  constructor(name, age) {
    this._name = name;
    this._age = age;
    this._skills = [];
  }

  addSkill(skill) {
    this._skills.push(skill);
  }
  isEligibleForVote() {
    return this._age >= 18;
  }
}

const s1 = new User("Jibi", 23);
s1.addSkill("React");
s1.addSkill("Javascript");
console.log(s1.isEligibleForVote());
console.log(s1._skills);
