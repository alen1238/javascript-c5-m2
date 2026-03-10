const express = require('express');
//const logger = require("./loggerMiddleware");
const morgan = require("morgan");

const app = express();

app.use(morgan("dev"));

app.get("/users/:id", (req, res)=>{
    
    res.json({message: "usuario encontrado"});
});

app.get("/productos", (req, res)=>{
      res.json({message: "producto encontrado"});
})


app.listen(3000, ()=>{
    console.log("Servidor escuchando en puerto 3000");
});