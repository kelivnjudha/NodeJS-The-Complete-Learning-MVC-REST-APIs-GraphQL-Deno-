const http = require('http');
// create a server
const server = http.createServer((req, res) => {
    const method = req.method;
    const url = req.url;
    if(url === '/'){
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>PRATICE</title></head>');
        res.write('<body><form action="/secret" method="POST"><input type="text" name="secret"><button type="submit">SEND</button></form></body>')
        res.write('</html>');
    };
    if(url === '/secret' && method === 'POST'){
        res.write('<html>');
        res.write('<head><body><h1>SECRET PAGE</h1><style>h1{color:red;}</style></body></head>');
        res.write('</html>');

    };
});

// Host the server on port 3000
server.listen(3000);