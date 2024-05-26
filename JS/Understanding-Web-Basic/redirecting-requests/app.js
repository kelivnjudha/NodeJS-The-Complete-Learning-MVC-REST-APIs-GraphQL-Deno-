const http = require('http');
const fs = require('fs');
// create server
const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;
    if(url === '/'){
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Landing Page</title></head>');
        res.write('<body>');
        res.write('<div class="container"><form action="/secret" method="POST"><input type="text" name="secret"><button type="submit">SUBMIT</botton></form></div>');
        res.write('<style>.container{display:flex;align-item:center;justify-content:"center";}</style>');
        res.write('</body>');
        res.write('</html>');
        return res.end(); // End with return, it's a good pratice
    };
    if(url === '/secret' && method === 'POST'){
        fs.writeFileSync('message.txt', 'DUMMY');    
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
    };
    res.write('<html>');
    res.write('<head><title>Secret Page</title></head>');
    res.write('<body><h1>SECRET PAGE</h1><style>h1{color:purple;}</style></body>');
    res.write('</html>');
});

// host server at port 3000;

server.listen(3000);