# Auto restart for Node.js Debugger

- For windows (click `Run` and click `Add Configuration`)

- You will see `.vscode` folder. There will be `launch.json` file in that folder. and add the following lines of code.

``` json
"restart" : true,
"runtimeExecutable" : "nodemon",
"console":"intergratedTerminal",

```

In order to use `nodemon` you need to install `nodemon` npm package.

### Nodemon Installation

- `npm install nodemon --save-dev` (`--save-dev` will install the package only for development enviroment)
- `npm install -g nodemon` (`-g` will install the package on the mechine and can be used it globally)
- `npm install nodemon --save` (`--save` will intall the packaes for production uses)