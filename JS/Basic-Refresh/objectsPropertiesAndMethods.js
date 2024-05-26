const user = {
    name : 'Kelvin',
    age : 21,
    //greet: () =>{return `Hi I am ${this.name}. I am ${this.age} years old`},
    // You can't use method like it in the objects. It will return undefined


    // use this
    greet1(){return `Hi I am ${this.name}. I am ${this.age} years old`},
    // Or use this
    greet: function(){
        return `Hi I am ${this.name}. I am ${this.age} years old`;
    }

}
const array =['kelvin', 'Sai', 'Alvin'];
for(let i of array){
    console.log(i);
}

// map() 
console.log(array.map(name => 'Name:' + name));
console.log(user.greet1())

// forEach()
array.forEach((arrays) => console.log(arrays))

// copy object

console.log(newObj = {...user})