const http = require('http');

// create server

const server = http.createServer((req, res) => {
    console.log(req);
    process.exit(); // stop the event loop 
});


// Listen incoming request on port 3000
server.listen(3000);