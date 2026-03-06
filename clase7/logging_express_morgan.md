# Logging en Express con Morgan

## 1. ¿Qué son los Logs?

Los **logs** son registros estructurados de eventos que ocurren dentro
de una aplicación o sistema. Su objetivo principal es **permitir el
monitoreo, diagnóstico y auditoría del comportamiento del software**.

En entornos profesionales, los logs se utilizan para:

-   **Depuración (Debugging):** identificar errores en el código.
-   **Monitoreo del sistema:** saber qué está ocurriendo en producción.
-   **Auditoría y seguridad:** registrar accesos, intentos de login y
    actividades sospechosas.
-   **Análisis de uso:** entender cómo los usuarios interactúan con el
    sistema.
-   **Trazabilidad:** reconstruir eventos cuando ocurre una falla.

Ejemplo de un log HTTP:

    GET /api/users 200 15 ms
    POST /api/login 401 3 ms

Esto indica:

-   Método HTTP
-   Ruta accedida
-   Código de respuesta
-   Tiempo de ejecución

En **APIs profesionales**, los logs son fundamentales para detectar
errores y analizar el comportamiento del sistema en producción.

------------------------------------------------------------------------

# 2. Uso de Morgan para Logging en Express

**Morgan** es un middleware de Node.js que permite registrar
automáticamente las peticiones HTTP realizadas a un servidor Express.

Es muy usado para:

-   ver tráfico HTTP
-   depurar APIs
-   generar logs de acceso

------------------------------------------------------------------------

## 2.1 Instalación de Morgan

Instalar Morgan usando npm:

``` bash
npm install morgan
```

------------------------------------------------------------------------

## 2.2 Ejemplo básico con Express

Ejemplo de uso simple de Morgan en una API Express.

``` javascript
import express from "express";
import morgan from "morgan";

const app = express();

// middleware de logging
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("API funcionando");
});

app.get("/users", (req, res) => {
  res.json([
    { id: 1, name: "Ana" },
    { id: 2, name: "Carlos" }
  ]);
});

app.post("/login", (req, res) => {
  res.status(401).json({ message: "Credenciales inválidas" });
});

app.listen(3000, () => {
  console.log("Servidor en puerto 3000");
});
```

### Ejemplo de salida en consola

    GET / 200 3 ms
    GET /users 200 5 ms
    POST /login 401 2 ms

El formato `"dev"` muestra:

-   método HTTP
-   ruta
-   código de estado
-   tiempo de respuesta
-   colores según el resultado

------------------------------------------------------------------------

# 3. Guardar logs en un archivo

En entornos profesionales, los logs normalmente **no se dejan solo en
consola**, sino que se guardan en archivos para análisis posterior.

Para esto se usa **Morgan + fs (filesystem)**.

## Ejemplo guardando logs en un archivo

``` javascript
import express from "express";
import morgan from "morgan";
import fs from "fs";
import path from "path";

const app = express();

// crear carpeta logs si no existe
const logDirectory = "./logs";

if (!fs.existsSync(logDirectory)) {
  fs.mkdirSync(logDirectory);
}

// crear stream para escribir en archivo
const accessLogStream = fs.createWriteStream(
  path.join(logDirectory, "access.log"),
  { flags: "a" }
);

// usar formato combined
app.use(morgan("combined", { stream: accessLogStream }));

app.get("/", (req, res) => {
  res.send("Inicio");
});

app.get("/products", (req, res) => {
  res.json([{ id: 1, name: "Laptop" }]);
});

app.listen(3000, () => {
  console.log("Servidor ejecutándose");
});
```

## Estructura del proyecto

    project/
    │
    ├── logs/
    │   └── access.log
    │
    ├── app.js
    └── package.json

## Ejemplo de contenido del archivo access.log

    ::1 - - [06/Mar/2026:18:30:22 +0000] "GET / HTTP/1.1" 200 5 "-" "Mozilla/5.0"
    ::1 - - [06/Mar/2026:18:30:24 +0000] "GET /products HTTP/1.1" 200 12 "-" "Mozilla/5.0"

Este formato es útil para:

-   auditoría
-   monitoreo en producción
-   análisis de tráfico
-   integración con herramientas como ELK Stack, Datadog o Grafana

