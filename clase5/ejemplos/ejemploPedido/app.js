const express = require('express');
const mongoose = require('mongoose');
const Pedido = require('./modelo/Pedido');

const app = express();
app.use(express.json()); //global


// Conexión a MongoDB
mongoose.connect('mongodb://localhost:27017/rappidb')
    .then(() => console.log('Conectado a MongoDB'))
    .catch(err => console.error('Error al conectar a MongoDB:', err.message));


// Rutas
app.get('/pedidos', async (req, res) => {
    try {
        const pedidos = await Pedido.find();
        res.json(pedidos);
    } catch (err) {
        res.status(500).json({ message: err.message });
    } 
});


app.post('/pedidos', async (req, res) => {
    try {
        const nuevoPedido = new Pedido(req.body);
        const pedidoGuardado = await nuevoPedido.save();
        res.status(201).json(pedidoGuardado);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});


app.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000');
});