// Using HTTP module
const http = require('http'); // NodeJs import

//function requestListener(req, res){}

// Ways to use requestListener function

// use defined function http.createServer(requestListener(req, res){});
//Anonnymous function http.createServer(function(req, res){});
// Arrow  function

/**
http.createServer((req, res) => {
    console.log(req)
})
 */

// We are going to use the following 

const server = http.createServer((req, res) => {
    console.log(req);
});

server.listen(3000)