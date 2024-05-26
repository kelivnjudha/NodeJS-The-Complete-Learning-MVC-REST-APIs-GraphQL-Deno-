- # Runtime Error

EXAMPLE

``` javascript

const fs = require('fs');

const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;
    if(url === '/'){
        res.write('<html>');
        res.write('<head><title>Using Node Module</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">SUBMIT</button></form></body>');
        res.write('</html>');
        return res.end();
    };
    if(url === '/message' && method === 'POST'){
        const body = [];
        req.on('data', (chunk)=>{
            console.log(chunk);
            body.push(chunk);
        });
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            fs.writeFile('message.txt', message, (err) => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
        });
    };

    res.setHeader('Content-Type', 'text/HTML'); // Error Here
    res.write('<html>');
    res.write('<head><title>RUNTIME ERROR</title></head>');
    res.write('<body><div><h1>LANDING PAGE</h1></div><style>div{display:flex; align-item:center; text-align:center; justify-content:center;}</style></bod>');
    res.write('</html>');
};



```