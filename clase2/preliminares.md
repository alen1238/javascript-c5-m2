### Preliminares

## JSON

JSON (JavaScript Object Notation):  es un formato de texto para intercambiar info. entre cliente y servidor
- No es código ejecutable
- Solo contiene datos

## Ejemplo de Json:
```javascript
{
    "nombre": "Matrix",
    "año": 2000,
    "actores": ["Keanu Reeve", "actriz2", "actor3"]
}
``` 
## Diferencia con Objeto JavaScript (funcionalidad y sintaxis)
```javascript
{
    nombre: "Matrix",
    año: 2000,
    actores: ["Keanu Reeve", "actriz2", "actor3"],
    function lanzar(){
        console.log("la película ya puede ser lanzada al mercado")
    }
}
``` 


## Middleware: El traductor del servidor
Lo utilizaremos para transformar la info. en formato JSON a objeto javascript
```javascript
  app.use(express.json());
```
Sin middleware el servidor recibirá datos pero no los entenderá.

## Rutas: Cómo el servidor decide qué hacer

Una ruta es una regla que indica cómo debe respnder el servidor ante una URL y un método HTTP específicos.

Una ruta se define por:
- Método HTTP (GET, POST, etc.)
- Dirección url (path)
- Representa una acción dentro del servidor

Ejemplo simple de una ruta en Express
```javascript 
   app.get('/saludo', (req, res)=>{
    res.send("Hola desde express");
   });
```
Traducción: Si algien hace GET a /saludo, responda con "Hola desde express"

## Códigos de estado HTTP: cómo responde el servidor de acuerdo al éxito o fracaso de la solicitud
El servidor no solo envía datos, también envía un código que indica qué pasó. Contexto (respuesta del servidor)

200 - OK: Todo salió bien
201 - Se creó exitosamente el recurso
400 - El cliente envió mal los datos
404 - La ruta o el recurso que solicita no existe
500 - Error interno del servidor

Regla: 
4xx --> error del cliente
5xx --> error del servidor