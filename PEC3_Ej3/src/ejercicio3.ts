/* Sustituye /***/ /*por las instrucciones adecuadas que cumplan las operaciones 
y salidas indicadas en los comentarios.*/

abstract class Animal {
    static population: number = 0;
    constructor() {
       
    }
    public abstract sound(): void;
}

class Dog extends Animal {
    color: string;

    constructor(color: string) {
        super();
        this.color=color;        
    }

    public iamadog() {
        console.log('yes, this is a dog');
    }

    sound():void
    {
    	console.log("WOW");
    	this.iamadog();
    }
}

class Cat extends Animal {
    gender: string;
    
    constructor(gender: string) {
        super();
        this.gender=gender;        
    }

    public iamacat() {
        console.log('yes, this is a cat');
    }

    sound():void
    {
    	console.log("MEOW");
    	this.iamacat();
    }
}

let animals: Animal[] = [];
animals.push(new Cat('male'));
animals.push(new Dog('white'));
animals.push(new Cat('female'));
animals.push(new Dog('black'));

for(let animal of animals) {
	if(animal instanceof Cat) {
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
