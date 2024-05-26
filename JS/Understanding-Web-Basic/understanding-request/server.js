const http = require('http');

// create a server 
const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers); // filter out the output

}); // annonymous function

// Listen at port 3000
server.listen(3000);