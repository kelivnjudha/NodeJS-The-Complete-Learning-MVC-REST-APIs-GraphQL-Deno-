const fs = require('fs');

const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;
    if(url === '/'){
        res.write('<html>');
        res.write('<head><title>TEST PRATICE</title></head>');
        res.write('<body><form action="/regUser" method="POST"><input type="text" name="user"><button type="submit">SUBMIT</button></form></body>');
        res.write('</html>');
        return res.end();
    };

    if(url === '/regUser' && method === 'POST'){
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
        req.on('end', () => { 
            const parsedBody = Buffer.concat(body).toString();
            const user = parsedBody.split('=')[1];
            fs.writeFile('users.txt', user, (err) => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
        });
    };
};

module.exports = requestHandler;