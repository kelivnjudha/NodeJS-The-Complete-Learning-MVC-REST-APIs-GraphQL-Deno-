const Data = {
    email : [],
    username : [],
    password : [],
    phone : [], //Make it optional
    logData(){
        if(this.username.length > 0 && this.password.length > 0){
            for(let i = 0; i < this.username.length;i ++){
                console.log(`USERNAME > ${this.username[i]}\nPASSWORD > ${this.password[i]}\nEMAIL > ${this.email[i]}\nPHONE > ${this.phone[i]}\n\n`);
            }
        }else{
            console.log(`There is no data to log.`);
        };
    },
    checkInputData(inputUsername, inputPassword){
        if(inputUsername && inputPassword){
            for(let i = 0; i < this.username.length; i++){
                if(inputUsername === this.username[i] && inputPassword === this.password[i]){
                    return 'Valid Input';
                }else{
                    return 'Invalid username or password';
                };
            };
        }else{
            console.log(`Missing Argument`);
        }
    },
    regInputData(email, username, password, phone){
        let isExist = false;
        let usernameIsExisit = false;
        if(email && username && password){
            for(let i = 0; i < this.email.length; i++){
                if(email === this.email[i]){
                    isExist = true;
                }else if (username === this.username[i]){
                    usernameIsExisit = true;
                }
            };
            if(isExist){
                console.log(`Account with email ${email} is already exisit. Please Login`);
            }else if(usernameIsExisit){
                console.log(`${username} is already exisit. Please Choose an unique one.`);    
            }else{
                if(!phone){
                    this.email.push(email);
                    this.username.push(username);
                    this.password.push(password);
                    this.phone.push('null');        
                }else if(phone){
                    this.email.push(email);
                    this.username.push(username);
                    this.password.push(password);
                    this.phone.push(phone);
                };
            };
            
        }else{
            console.log(`Missing Argument.`)
        };
    },
    rmUser(username){
        let isfound = false;
        let index = 0;
        for(let i = 0; i < this.username.length; i++){
            if(username === this.username[i]){
                isfound = true;
                index = i;
                break;
            };
        };
        if(isfound){
            this.username.splice(index, 1);
            this.email.splice(index, 1);
            this.password.splice(index, 1);
            this.phone.splice(index, 1);
        }else{
            console.log(`${username} is not found. Use logData() method to see exisiting users`);
        };
    },
    changePassword(oldPassword, newPassword){
        let correct = false;
        let index = 0;
        for(let i = 0; i < this.username.length; i++){
            if(oldPassword === this.password[i]){
                correct = true;
                index = i;
                break;
            };
        };
        if(correct){
            this.password.splice(index,1,newPassword);
            console.log(`Password Changed Successfully.`);
        }else{
            console.log(`Incorrect Password.`);
        };
    },
    changeUsername(oldUsername, password, newUsername){
        let correct = false;
        let index = 0;
        for(let i = 0; i < this.username.length; i++){
            if(oldUsername === this.username[i] && password === this.password[i]){
                correct = true;
                index = i;
            };
        };
        if(correct){
            this.username.splice(index, 1, newUsername);
        }else{
            console.log('Incorrect Username or Password.');
        };
    }
    
};

const pushData = (dataUsername,dataPassword,demail,dphone, usernameArray, passwordArray, emailArray, phoneArray) => {
    for(let i = 0; i<usernameArray.length; i++){
        dataUsername.push(usernameArray[i]);
        dataPassword.push(passwordArray[i]);
        demail.push(emailArray[i]);
        dphone.push(phoneArray[i]);
    };
};


const Ausername = ['Kelvin', 'Ploy', 'Sai', 'Lux', 'Jack'];
const Apassword = ['200210', '200411', '2006', 'Roblox', 'Unknown'];
const Aemail = ['kelvin@ploy.com', 'ploy@pii.com', 'sai@sai.com', 'lux@roblox.com', 'jack@bestie.com'];
const Aphone = ['09777727697', '0627339329', '09440015505', '0521135324', '0291338102'];
const {username, password, email, phone} = Data;
pushData(username,password,email,phone,Ausername,Apassword,Aemail,Aphone)
Data.regInputData('k3downhill@gmail.com', 'JSPKK', 'iamjspkk');
Data.logData();
Data.changePassword('200210', 'Iam21@2023');
Data.changeUsername('Kelvin', 'Iam21@2023', 'FeeZee');
Data.logData();
Data.rmUser('Lux');
Data.logData();