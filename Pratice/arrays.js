const Pii = {
    logArr(arr){
        if(arr){
            for(let i = 0; i < arr.length; i++){
                console.log(arr[i]);
            };
        } else{
            console.log('Missing Argument.\nUsage: logArr(array);');
        };
    },
    checkMatchArr(arr, keyword, bool){ // if bool is true it will check both capitalization and non-capitalization
        let isFound = false;
        if(arr && keyword && bool === true || bool === false){
            if(bool === true){
                for(let i = 0; i < arr.length; i++){
                    if(arr[i] === keyword){
                        isFound = true
                    };
                };
            }else{
                for(let i = 0; i < arr.length; i++){
                    if(arr[i].toLowerCase() === keyword.toLowerCase()){
                        isFound = true
                    };
                };
            };
            if(isFound){
                return 0;
            }else{
                return 1;
            };
        };
    },
    replaceIndex(string, index, letter){
        let array = [];
        let result = '';
        if(string&& index && letter){
            for(let i = 0; i < string.length; i++){
                array.push(string[i]);
            };
            array[index] = letter;
            result = array.join('');
            return result;
        }else{
            return `ERROR: Missing Argument\nUSAGE: replaceIndex(string/number, number, string/number)`;
        };
    },
};


const hobbies = ['Swimming', 'Football', 'Cooking', 'Coding'];
// ways to copy arrays
const newHobbies = hobbies.slice();
const anotherHobbies = [...hobbies];

// copy object

const newPiii = {...Pii};

Pii.logArr(hobbies);
console.log(Pii.replaceIndex(hobbies[0], 2, 1));
console.log(Pii.checkMatchArr(hobbies, 'football', false));

console.log(newHobbies, anotherHobbies, hobbies);

console.log(newPiii)