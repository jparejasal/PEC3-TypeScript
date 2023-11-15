"use strict";
/* Sustituye /***/ /*por las instrucciones adecuadas que cumplan las operaciones
y salidas indicadas en los comentarios.*/
class Animal {
    constructor() {
    }
}
Animal.population = 0;
class Dog extends Animal {
    constructor(color) {
        super();
        this.color = color;
    }
    iamadog() {
        console.log('yes, this is a dog');
    }
    sound() {
        console.log("WOW");
        this.iamadog();
    }
}
class Cat extends Animal {
    constructor(gender) {
        super();
        this.gender = gender;
    }
    iamacat() {
        console.log('yes, this is a cat');
    }
    sound() {
        console.log("MEOW");
        this.iamacat();
    }
}
let animals = [];
animals.push(new Cat('male'));
animals.push(new Dog('white'));
animals.push(new Cat('female'));
animals.push(new Dog('black'));
for (let animal of animals) {
    if (animal instanceof Cat) {
        animal.sound();
        Animal.population++;
    }
    else {
        animal.sound();
        Animal.population++;
    }
}
/**  loop prints these lines
MEOW
yes, this is a cat
WOW
yes, this is a dog
MEOW
yes, this is a cat
WOW
yes, this is a dog
*/
console.log(Animal.population); //4
