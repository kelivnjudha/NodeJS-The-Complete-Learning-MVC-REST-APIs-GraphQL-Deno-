const http = require('http');
const fs = require('fs');

// create server
const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;
    if(url === '/'){
        res.write('<html>');
        res.write('<head><title>Pratice Redirect</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="password" name="message"><button type="submit">SUBMIT</button></form></body>');
        res.write('</html>');
        return res.end();
    };
    if(url === '/message' && method === 'POST'){
        fs.writeFileSync('message.txt', 'TEST');
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
    }
});

// listen on port 3000
server.listen(3000);