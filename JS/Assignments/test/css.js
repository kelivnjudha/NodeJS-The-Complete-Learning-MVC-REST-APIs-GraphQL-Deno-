const text = document.getElementById("success");

const textFunkyColor = (domElement) => {
    const r = Math.random() * 255;
    const b = Math.random() * 255;
    const g = Math.random() * 255;

    domElement.style.color = `rgb(${r},${g},${b})`;
};

const changeText = (domElement) => {
    domElement.innerHTML = "CONGRAT !!!";
}

changeText(text);

setInterval(()=>{
    textFunkyColor(text);
},200);


/**
 * res.write('<html>');
                res.write('<head><title>REG SUCCESSFUL</title></head>');
                res.write('<script src="./css.js" type="module"></script>');
                res.write('<body>');
                res.write('<h1 id="success"></h1>');
                res.write('</body>');
                res.write('<html>');
 */