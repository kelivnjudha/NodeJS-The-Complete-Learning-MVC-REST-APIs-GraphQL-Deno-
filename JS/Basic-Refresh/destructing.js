const person = {
    name : 'Kelvin',
    age : 21,
    greet(){
        console.log(`Hi, I am ${this.name}.`);
    }
};

// NORMAL
const printName = (personData) =>{
    console.log(personData.name);
}

console.log(printName(person))

// Object Destructuring

const printData  =({name}) => {
    console.log(name);
};

const Data = {
    username : [],
    password : [],
    isRegistered : false,
    log(){
        for(let data of this.username.length){
            return `Username: ${this.username[data]} | Password: ${this.password[data]}`
        };
    }
};

Data.username.push('Kelvin', 'Ploy', 'Sai', 'Alvin');
Data.password.push('200210', 'BabeePiPii', '2006', '2002');

// Using Object destructuring
const logData = ({username, password}) => {
    for(let i = 0; i < username.length; i++){
        console.log(username[i], password[i])
    }
};

const checkInput = (username, password) => {
    let usernames = Data.username;
    let passwords = Data.password;
    for(let i = 0; i < usernames.length; i++){
        if(username === usernames[i] && password === passwords[i]){
            return `Login Successful`;
        }else{
            return `Invalid Username or Password`;
        };
    };
};

//console.log(checkInput('Kelvin', '20021'));


// Another destructuring style Method 2

const {username, password} = Data;
// console.log(username[1], password[1]);


// Let's Use Method 2
const FoodsData = {
    food : ['Apple', 'Pizza', 'Bread', 'Milk', 'Egg'],
    price : [100, 200, 150, 80, 20],
    promotion (percentage, item){
        percentage = Number(percentage);
        let isFound = false;
        let arrayIndex = 0;
        for(let i = 0; i < this.food.length; i++){
            if(item.toLowerCase() === this.food[i].toLowerCase()){
                isFound = true;
                arrayIndex = i;
            }
        };
        if(isFound){
            let price = Number(this.price[arrayIndex]);
            return `Item - ${item} | ${percentage}% OFF | Price - ${percentage * price / 100}`;
        }
    }
}

//console.log(FoodsData.promotion(10, 'Pizza'));


// Use destructuring Method 2 and forEach() function

const {food, price} = FoodsData;
food.forEach((foods) => console.log(foods)); 

// Array destructuring

const array = ['Kelvin', 'Sai'];

const [name1, name2] = array
console.log(name1, name2);