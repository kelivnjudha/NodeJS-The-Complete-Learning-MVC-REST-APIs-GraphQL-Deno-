const http = require('http');

// create server
const server = http.createServer((req, res) => {
    // log the url, method and headers from request
    console.log(req.url, req.method, req.headers);
    // Set Headers 
    res.setHeader('Content-Type', 'text/html');
    // write the responses
    res.write('<html>');
    res.write('<head><title>Pratice</title></head>');
    res.write('<body><h1>THIS IS PRATICE</h1></body>');
    res.write('</html>');
    res.end(); // Once you end it you can't write anymore. If you write more, you will be end up with errors.
    process.exit(); // Stop the whole process
});

// listen on port 3000
server.listen(3000);