const fs = require('fs');

const requestHandler = (req, res) => {
    let userSet = false;
    const url = req.url;
    const method = req.method;
    if(url === '/'){
        res.write('<html>');
        res.write('<head><title>TEST</title></head>');
        res.write('<body>');
        res.write('<style>body{display:flex;text-align:center;align-item:center;justify-content:center} #regContainer{display:block;}</style>');
        res.write('<div id="regContainer"><form action="/userReg" method="POST"><input type="text" name="user"><button>SUBMIT</button></form></div>')
        res.write('</body>');
        res.write('</html>');
        return res.end();
    };
    if(url === '/userReg' && method === 'POST'){
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
        req.on('end', ()=>{
            const parsedBody = Buffer.concat(body).toString();
            const user = parsedBody.split('=')[1];
            fs.writeFile('users.txt', user, (err) => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end(); 
            });
        });
        userSet = true;
    };
    if(url === '/userCheck'){
        res.write('<html>');
        res.write('<head><title>REG SUCCESSFUL</title></head>');
        res.write('<body>');
        res.write('<h1 id="success">BRUH</h1>');
        res.write('</body>');
        res.write('<script src="./css.js" type="module"></script>');
        res.write('<html>');
        return res.end();
    };
    
};

module.exports = requestHandler;