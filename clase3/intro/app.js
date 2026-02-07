const express = require('express');
const app = express();

function bloquearPorHora(req, res, next) {
    let horaLimite = 23; // 10 PM 
    const hora = new Date().getHours();

    if (hora >= horaLimite) {
        return res.send(`
            <!DOCTYPE html>
            <html lang="es">
            <head>
                <meta charset="UTF-8">
                <title>Servicio no disponible</title>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        background: linear-gradient(135deg, #ff9a9e, #fad0c4);
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        height: 100vh;
                        margin: 0;
                    }
                    .card {
                        background: #fff;
                        padding: 40px;
                        border-radius: 15px;
                        box-shadow: 0 8px 20px rgba(0,0,0,0.2);
                        text-align: center;
                        max-width: 400px;
                    }
                    h1 {
                        color: #d9534f;
                        margin-bottom: 15px;
                        font-size: 1.8em;
                    }
                    p {
                        color: #555;
                        font-size: 1.1em;
                    }
                    .clock {
                        font-size: 2em;
                        color: #d9534f;
                        margin-top: 20px;
                        font-weight: bold;
                    }
                </style>
            </head>
            <body>
                <div class="card">
                    <h1>⚠ Servicio no disponible</h1>
                    <p>El acceso está restringido después de las <strong>${horaLimite}:00</strong> horas.</p>
                    <div class="clock">Hora actual: ${hora}:00</div>
                </div>
            </body>
            </html>
        `);
    }
    next();
}

app.get('/servicio', bloquearPorHora, (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <title>Bienvenido</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    background: linear-gradient(135deg, #89f7fe, #66a6ff);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    height: 100vh;
                    margin: 0;
                }
                .card {
                    background: #fff;
                    padding: 40px;
                    border-radius: 15px;
                    box-shadow: 0 8px 20px rgba(0,0,0,0.2);
                    text-align: center;
                    max-width: 400px;
                }
                h1 {
                    color: #28a745;
                    margin-bottom: 15px;
                    font-size: 1.8em;
                }
                p {
                    color: #333;
                    font-size: 1.1em;
                }
            </style>
        </head>
        <body>
            <div class="card">
                <h1>✅ Bienvenido al servicio</h1>
                <p>Gracias por ingresar, estamos a tu disposición.</p>
            </div>
        </body>
        </html>
    `);
});

app.listen(3000, () => {
    console.log('Servidor iniciado en http://localhost:3000');
});
