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
};

module.exports = requestHandler; // This works like default export; You don't have to specify the function name
// to run the funtion from this file. Because module.export = functionName is used to export only one property or function
