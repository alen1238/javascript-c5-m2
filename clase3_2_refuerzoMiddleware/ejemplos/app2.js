const express = require('express');
const app = express();
const port = 3000;

function horaMiddleware(req, res, next) {
  const horaActual = new Date().toLocaleTimeString();
  res.locals.hora = horaActual;
  next();
}

app.get('/', horaMiddleware, (req, res) => {
  res.send(`La hora actual es: ${res.locals.hora}`);
});


app.listen(port, () => {  console.log(`Example app listening at http://localhost:${port}`);
});

