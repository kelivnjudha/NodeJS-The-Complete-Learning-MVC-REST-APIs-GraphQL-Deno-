const http = require('http');
const routes = require('./routes');
// create server
const server = http.createServer(routes);

// Listen on Port 3000;
server.listen(3000);
// npm install nodemon --save-dev (this command will install the packages only for developement enviroment)
// npm install nodemon --save (this command will intall the packaes for production uses)
// npm install nodemon -g (this command will install the packages on our mechine and can be used it globally '-g means global')

// npm install (this command will update the packages if avaliable 'there will be ^ sign at the version of the packages');

// You can also delet the node_modules flders to free up some space and run 'npm install' it will reinstall all the modules 
