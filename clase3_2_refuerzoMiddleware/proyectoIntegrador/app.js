const express = require('express');
const app = express();
const port = 3000;


app.use(express.json()); // especializado para analizar JSON en el cuerpo de las solicitudes

//simulación de BBDD de pacientes
let pacientes = [
    { id: 1, nombre: 'Juan Pérez', edad: 30, },
    { id: 2, nombre: 'María López', edad: 25 },
];

let contadorPeticiones = 0;

app.use((req, res, next) => {
    contadorPeticiones++;
    res.locals.hospital = "Hospital Digital JS";
    res.locals.fecha = new Date().toLocaleString();
    res.locals.peticionNumero = contadorPeticiones;

    console.log(`Petición #${res.locals.peticionNumero} - ${res.locals.fecha} - ${res.locals.hospital}`);
    next();
});


function verificarRol(req, res, next) {
    const rol= req.header["rol"];
    if(!rol){
        return res.status(401).json({ error: "Rol no proporcionado en el Header"});
    }

    req.rol = rol; //aquí cmpartimos el rol con los siguientes middlewares y rutas
    next();
}


app.get('/pacientes', (req, res) => {
    res.json({
       hospital: res.locals.hospital,
       fecha: res.locals.fecha,
       peticionNumero: res.locals.peticionNumero,
       total: pacientes.length,
       pacientes: pacientes 
    })
});

 app.post('/pacientes', (req, res) => {
    const { nombre, edad } = req.body;

    if (!nombre || !edad) {
        return res.status(400).json({ error: "Faltan datos: nombre y edad son requeridos" });
    }

    const nuevoPaciente = {
        id: pacientes.length + 1,
        nombre,
        edad
    };

    pacientes.push(nuevoPaciente);
    res.status(201).json({
        mensaje: "Paciente creado exitosamente",
        paciente: nuevoPaciente
    });
}
);

app.post('/diagnostico', verificarRol, (req, res) => {
    if(req.rol !== "DOCTOR"){
        return res.status(403).json({ error: "Acceso denegado: solo los doctores pueden crear diagnósticos" });
    }

    const { pacienteId, diagnostico } = req.body;

    if (!pacienteId || !diagnostico) {
        return res.status(400).json({ error: "Faltan datos: pacienteId y diagnostico son requeridos" });
    }

    const paciente = pacientes.find(p => p.id === pacienteId);

    if (!paciente) {
        return res.status(404).json({ error: "Paciente no encontrado" });
    }

    res.json({
        mensaje: "Diagnóstico creado exitosamente",
        doctor: req.rol,
        paciente: paciente.nombre,
        descripcion
    });
});


app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});