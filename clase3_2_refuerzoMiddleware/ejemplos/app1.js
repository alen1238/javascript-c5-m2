const express = require('express');
const app = express();
const port = 3000;


app.use((req, res, next) => {
  res.locals.mensaje = 'Hola desde el middleware global';
  next();
});

app.get('/', (req, res) => {
  res.send(res.locals.mensaje);
});





app.listen(port, () => {  console.log(`Example app listening at http://localhost:${port}`);
});