const http = require('http');
const routes = require('./routes');
// create server
const server = http.createServer(routes);
// Listen at port 3000
server.listen(3001);
