# Types of Errors

- `Syntax Errors`
- `Runtime Errors`
- `Logical Errors`

## Syntax Error

``` javascript

// Example

cons http = require('http'); // Error Here.

// Create server
const server = http.createServer((req, res) => {
    console.log(req);
});
// Listen at port 3000 localhost
server.listen(3000);

```