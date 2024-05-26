const http = require('http');

// create server
const server = http.createServer((req, res) => {
    const url = req.url;
    if(url === '/'){
        // set header
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Routing Request</title></head>');
        res.write('<body>');
        res.write('<h1>NODE JS Routing Request Lesson</h1>');
        res.write('<form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form>')
        res.write('</body>');
        res.write('</html>');
        return res.end();// once you end it you cannot write it anymore
    };

    if(url === '/message' && req.method === 'POST'){
        
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Routing Request</title></head>');
    res.write('<body><h1>BEEP BOOB</h1></body>');
    res.write('</html>');
    

});

server.listen(3000);