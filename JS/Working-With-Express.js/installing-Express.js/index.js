const http = require('http');

const express = require('express');

const app = express();

// create server

const server = http.createServer(app);

// listen on port 3000
server.listen(3000)