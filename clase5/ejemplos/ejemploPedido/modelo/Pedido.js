//Pedido: cliente, producto, precio, entregado
const mongoose = require('mongoose');

const pedidoSchema = new mongoose.Schema({
    cliente: {
        type: String,
        required: true
    },
    producto: {
        type: String,
        required: true
    },
    precio: {
        type: Number,  
        required: true
    },
    entregado: {
        type: Boolean,
        default: false
    }
});

const Pedido = mongoose.model('Pedido', pedidoSchema);

module.exports = Pedido;