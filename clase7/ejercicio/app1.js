const express = require("express");

const app = express();


app.get("/users/:id", (req, res)=>{
    const id = req.params.id;

    const users = [
        {id: 1, name: "Ana"},
        {id: 2, name: "Carlos"},
        {id: 3, name: "Alejandra"},
        {id: 2, name: "Sebastian"},
    ];

    const user = users.find(u => u.id == id);
    if(!user){
        //aqui deberíamos mandar a llamar al middleware de errores.
        const error = new Error("Usuario no encontrado");
        error.status = 404;
        return next(error); //aquí estamos llamando al mid. de error
        //res.status(404).json({
        //    error: "usuario no encontrado"
       // });
    }
    res.json(user.name); //esto solo se ejecuta si no se ejecuta el bloque del if.
});

app.use((err, req, res, next) =>{
    res.status(err.status || 500).json({error: err.message});
});

app.listen(3000, ()=>{
    console.log("Servidor escuchando en el puerto 3000");
});