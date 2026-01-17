const http = require('http');


 const puerto = 3000;

 const servidor = http.createServer((req, res) => {
     res.statusCode = 200;
     res.setHeader('Content-Type', 'text/plain');
     res.end('Hola, mundo node!\n');
 });    


 servidor.listen(puerto, () => {
     console.log(`Servidor corriendo en http://localhost:${puerto}/`);
 }); //activa el servidor en el puerto 3000
