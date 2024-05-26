const person = {
    name : 'Kelvin',
    age : 21,
    greet(){
        console.log(`Hi my name is ${this.name}. And I am ${this.age} years old.`)
    },
};

person.greet();