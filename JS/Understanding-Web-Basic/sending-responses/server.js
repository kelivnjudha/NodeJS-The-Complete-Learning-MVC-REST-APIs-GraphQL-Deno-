const http = require('http');

// create server
const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers);
    res.setHeader('Content-Type', 'text/html');
    // DO NOT USE THIS METHOD TO WRITE HTML Beep Boob
    res.write('<html>');
    res.write('<head><title>My first Page</title></head>');
    res.write('<body><h1>Hello From my Node JS server</h1></body>');
    res.write('</html>');
    res.end(); // After ending it, you cannot write anymore !! it will end up with errors
});

// listen at port 3000
server.listen(3000);