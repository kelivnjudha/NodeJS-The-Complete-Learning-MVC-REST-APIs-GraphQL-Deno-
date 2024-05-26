const check = () => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve(true));
    }, 2000) // 2 second or 2000 ms
    return promise;
}

const Data = {
    username : [],
    password : [],
    checkData(username, password){
        check().then(text => {
            if(username === this.username && password === this.password){
                return text;
            }else{
                return `Unvalid input`;
            }
        })
    },
    logData(){
        for(let i = 0; i < this.username.length; i++){
            console.log(`USERNAME - ${this.username[i]} \t|\t PASSWORD - ${this.password[i]}`);
        };
    },
    deleteData(username){
        let index = 0;
        for(let i = 0; i < this.username.length; i++){
            if(username === this.username[i]){
                index = i;
                break;
            }else{
                return `${username} doesn't exisit.`
                break;
            };
        };
        if(index > 0){
            this.username.splice(index,1); // Used splice() function to remove a specific item from array
            this.password.splice(index,1); // same here
        };
    },
    submitData(usernameArr, passwordArr){
        for(let i = 0; i < usernameArr.length; i++){
            this.username.push(usernameArr[i]);
            this.password.push(passwordArr[i]);
        };

    }

};

const username = ['Kelvin', 'Alvin', 'Sai', 'Jake', 'Lux'];
const password = ['200210', '2002', 'ASDF', 'lilbestfriend', 'Roblox'];
Data.submitData(username, password);
console.log(Data.username);
console.log(Data.password);
Data.logData();
console.log(Data.checkData(username[0], '-'));