const express = require('express');
const app = express();
const port = 3000;

app.use((req, res, next) => {
  res.locals.usuario = {
    nombre: 'Juan Pérez',
    rol: 'Administrador',
    activo: true
  }
  next();
});


app.get('/usuario', (req, res) => {
  res.send(res.locals.usuario);
});

app.listen(port, () => {  console.log(`Example app listening at http://localhost:${port}`);
});
