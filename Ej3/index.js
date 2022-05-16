let http = require("http");
const booleano = require("./numeros");

const arr = [2, 3, 101, 201, 202, 100]
arr.forEach(res => {
    const resultado= booleano.esPar(res);
    return resultado
    })

http.createServer((req, res) =>{
res.writeHead(200, { "Content-Type": "text/html" });
res.end("Aprendiendo en The Bridge!");
})
.listen(8080);

 