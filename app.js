const express = require('express');
const app = express();
const port = 3000;

//Middleware para parsear JSON
app.use(express.json());

//simulación de una base de dato de películas
const peliculas = [
    { id: 1, titulo: 'Inception', director: 'Christopher Nolan', año: 2010 },
    { id: 2, titulo: 'The Matrix', director: 'The Wachowskis', año: 1999 },
    { id: 3, titulo: 'Interstellar', director: 'Christopher Nolan', año: 2014 }
];

/*
   GET /peliculas
   Devuelve la lista de todas las películas
*/
app.get('/peliculas', (req, res) => {
    res.json(peliculas);
});

/*
   GET /peliculas/:id
   Devuelve una película específica por su ID
   ejemplo: /peliculas/3
*/
app.get('/peliculas/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const pelicula = peliculas.find(p => p.id === id);
    if (pelicula) {
        res.json(pelicula);
    } else {
        res.status(404).json({ error: 'Película no encontrada' });
    }
});

/*
   POST /peliculas  
    Agrega una nueva película */
app.post('/peliculas', (req, res) => {
    const nuevaPelicula = req.body;
    peliculas.push(nuevaPelicula);
    res.status(201).json(nuevaPelicula);
});


//Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});