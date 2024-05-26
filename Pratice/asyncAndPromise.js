// Async using setTimeout()

setTimeout(() => {
    console.log('1 second DONE');
    fetchData(text => {console.log(text)})
},1000);
// Async in function

const fetchData = callback => {
    setTimeout(() => {
        callback('DONE')
    }, 2000)
}


// Using Promises

const test = () => {
    const promise = new Promise((resolve, reject) =>{
        setTimeout(()=>{resolve('Test DONE')});
    }, 1000);
    return promise;
};

setTimeout(()=>{
    console.log('Test function');
    test().then(text => {console.log(text)});
},1000);


// Example using promise

const usingPromise = () => {
    const promise = new Promise((resolve, reject) =>{
        setTimeout(()=>{
            resolve('Example function Done');
        }, 3000);
    })
    return promise;
}

setTimeout(()=>{
    usingPromise().then(text =>{
        console.log(text);
        return usingPromise();
    })
    usingPromise().then(text2 =>{
        console.log(text2)
    })
})