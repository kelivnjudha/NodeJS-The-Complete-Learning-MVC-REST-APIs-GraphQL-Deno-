//  copy array

const array = ['a', 1, 'b', '2'];


// Method 1
const copied = array.slice();

// Method 2
const copiedArray = [...array];

console.log(array, copied, copiedArray)


/// IMPORTANT 
// How to add unlimited arguments
const toArray = (...args) => {
    return args;
}

console.log(toArray(1,2,3,4,5,6))