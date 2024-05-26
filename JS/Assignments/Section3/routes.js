const fs = require('fs');

const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;
    if(url === '/'){
        res.write('<html>');
        res.write('<head><title>SECTION 3</title></head>');
        res.write('<body>');
        res.write('<div id="header"><h1>WELCOME FROM NODE SERVER</h1></div>');
        res.write('<hr>');
        res.write('<div id="formContainer"><form action="/create-user" method="POST"><input type="text" name="user"><button type="submit">Submit</button></form></div>');
        res.write('<style>#header{display:flex; text-align: center; justify-content:center;} #formContainer{display:flex; align-item:center; justify-content:center; margin-top:40px}</style>')
        res.write('</body>')
        res.write('</html>');
        return res.end();
    };
    if(url === '/users'){
        res.write('<html>');
        res.write('<head><title>Users</title></head>');
        res.write('<body><ul><li>Bob</li><li>Jake</li><li>Ben</li><li>Browny</li></ul>');
        res.write('</html>');
        return res.end();
    };
    if(url === '/create-user' && method === 'POST'){
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[0];
            fs.writeFile('users.txt', message, (err) => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            })
        })
    }
};

module.exports = requestHandler;