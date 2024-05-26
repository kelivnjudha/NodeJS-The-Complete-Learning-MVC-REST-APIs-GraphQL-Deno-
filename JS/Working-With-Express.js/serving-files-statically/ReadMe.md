# Define a Public static file

```javascript

const app = express();

app.use(express.static(path.join(__dirname, 'public')))

```

``` html

<link rel="stylesheet" href="/css/main.css"> 

```

## File system

    root_
        |_pubic_
                |_css_
                    |_main.css