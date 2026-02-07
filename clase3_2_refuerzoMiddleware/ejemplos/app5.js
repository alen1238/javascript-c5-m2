const express = require('express');
const app = express();
const port = 3000;

function authSimulada(req, res, next) {
  req.usuario = { nombre: 'Juan', rol: 'admin' }; // Simulación de usuario autenticado
  next();
}


app.get('/dashboard', authSimulada, (req, res) => {
    res.json({
        mensaje: "Perfil del usuario",
        usuario: req.usuario
    })
});


app.listen(port, () => {  console.log(`Example app listening at http://localhost:${port}`);
});