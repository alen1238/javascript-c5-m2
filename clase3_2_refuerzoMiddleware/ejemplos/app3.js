const express = require('express');
const app = express();
const port = 3000;


app.use((req, res, next) => {
  res.locals.appName = 'Mi Aplicación Express ejemplo3';
  res.locals.autor = "Equipo DevSenior";
  next();
});

app.get('/', (req, res) => {
  res.send(`Bienvenido a ${res.locals.appName} creado por ${res.locals.autor}`);
});



app.listen(port, () => {  console.log(`Example app listening at http://localhost:${port}`);
});
