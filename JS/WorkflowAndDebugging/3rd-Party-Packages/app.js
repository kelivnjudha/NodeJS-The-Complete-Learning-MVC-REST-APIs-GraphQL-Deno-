const http = require('http');
const routes = require('./routes');
// create server
const server = http.createServer(routes);

// Listen on Port 3000;
server.listen(3000);

