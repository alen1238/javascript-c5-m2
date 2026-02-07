const express = require('express');
const app = express();
const port = 3000;

function loguearRuta(req, res, next) {
  console.log(`Ruta accedida: ${req.path} desde la función loguearRuta`);
  next();
}

function despedirse(req, res, next) {
  console.log('¡Adiós desde la función despedirse!');
  next();
}

//app.use(loguearRuta); //definimos el middleware global

app.get('/saludo', loguearRuta, (req, res) => {
  res.send('<h1>¡saludando desde la ruta /saludo!</h1>');
  console.log('Respuesta enviada desde la funcion flecha');
});

app.get('/login', (req, res) => {
  res.send('<h1>¡Iniciando sesión desde la ruta /login!</h1>');
  console.log('Respuesta enviada desde la funcion flecha');
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});