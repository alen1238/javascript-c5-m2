function logger(req, res, next){
    console.log("------------------")
    console.log("Peticion recibida: ");
    console.log("Método: ", req.method);
    console.log("Ruta: ", req.url);
    console.log("Hora: ", new Date().toISOString());

    next();
}

module.exports = logger;