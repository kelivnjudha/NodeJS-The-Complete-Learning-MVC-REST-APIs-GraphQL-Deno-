// JS build in function setTimeout(() =>{},1000); ms
setTimeout(() => {console.log(`1 second counted`);
    fetchData().then(text => {console.log(text)});
},1000);


// Async nested 
// add promise
const fetchData = () => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(()=>{resolve('Done')},1500);
    });
    return promise;
};



// Test
// Now this is kind of confusing (*$W&U%)
// Kinda similar to forEach() Map() function
const test = callback => {
    setTimeout(() => {callback('2 second Done')}, 2000);
};

setTimeout(() => {test(text => console.log(text))},2000);