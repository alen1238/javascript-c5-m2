# Ejercicios Prácticos — Schemas y API REST con Node.js y MongoDB

---

## EJERCICIO 1 — API de Reservas de Cine

### Objetivo

Desarrollar una API básica que permita **crear y consultar reservas de cine**, aplicando los conceptos de:

- Schemas con Mongoose  
- Modelos  
- Conexión a MongoDB  
- Rutas GET y POST  
- Pruebas con Postman  

---

### Contexto

Un cine necesita un sistema para registrar las reservas de funciones realizadas por sus clientes.

Cada reserva debe almacenar información básica sobre la persona y la función reservada.

---

### Requerimientos del sistema

#### 1. Modelo (Schema)

Crear un modelo llamado `Reserva` con los siguientes campos y tipos de datos:

| Campo             | Tipo de dato |
|------------------|--------------|
| nombreCliente     | String       |
| pelicula          | String       |
| cantidadAsientos  | Number       |
| confirmada        | Boolean      |

Consideraciones:

- Algunos campos deben ser obligatorios.
- El campo `confirmada` debe tener un valor por defecto.
- `cantidadAsientos` debe aceptar únicamente valores numéricos.

---

#### 2. Conexión a la base de datos

- Crear una base de datos en MongoDB para el cine.
- Conectar la aplicación usando Mongoose.
- Manejar correctamente el error cuando la base de datos no esté activa.
- Mostrar mensajes claros en consola sobre el estado de la conexión.

---

#### 3. Servidor y rutas

Crear un servidor con Express que exponga las siguientes rutas:

**Consultar reservas**
- Método: GET
- Ruta: `/reservas`
- Devuelve todas las reservas almacenadas.

**Crear reserva**
- Método: POST
- Ruta: `/reservas`
- Permite crear una nueva reserva enviando datos en formato JSON.

---

### Pruebas con Postman

Realizar las siguientes pruebas:

1. Crear una reserva válida con todos los campos correctos.
2. Intentar crear una reserva omitiendo un campo obligatorio.
3. Intentar crear una reserva con un tipo de dato incorrecto.
4. Apagar MongoDB e intentar crear una reserva.

---

### Preguntas de reflexión

1. ¿Qué sucede si los datos enviados no cumplen el schema?
2. ¿En qué punto ocurre la validación del schema?
3. ¿Por qué no se guarda información cuando la base de datos está apagada?

---

## EJERCICIO 2 — API de Inscripciones a un Gimnasio

### Objetivo

Desarrollar una API que permita **registrar y consultar inscripciones de usuarios a un gimnasio**, reutilizando la estructura y lógica vistas en clase.

---

### Contexto

Un gimnasio necesita registrar las inscripciones de sus usuarios, almacenando información básica del cliente y su estado de inscripción.

---

### Requerimientos del sistema

#### 1. Modelo (Schema)

Crear un modelo llamado `Inscripcion` con los siguientes campos y tipos de datos:

| Campo            | Tipo de dato |
|------------------|--------------|
| nombreUsuario     | String       |
| plan              | String       |
| mesesContratados  | Number       |
| activa            | Boolean      |

Consideraciones:

- Todos los campos, excepto `activa`, deben ser obligatorios.
- El campo `activa` debe tener un valor por defecto.
- `mesesContratados` debe ser un valor numérico válido.

---

#### 2. Conexión a la base de datos

- Crear una base de datos en MongoDB para el gimnasio.
- Conectar la aplicación usando Mongoose.
- Manejar errores de conexión adecuadamente.

---

#### 3. Servidor y rutas

Crear un servidor con Express que exponga las siguientes rutas:

**Consultar inscripciones**
- Método: GET
- Ruta: `/inscripciones`

**Crear inscripción**
- Método: POST
- Ruta: `/inscripciones`

---

### Pruebas con Postman

Realizar al menos las siguientes pruebas:

1. Crear una inscripción válida.
2. Crear una inscripción con datos incompletos.
3. Crear una inscripción con tipos de datos incorrectos.
4. Apagar MongoDB e intentar crear una inscripción.

---

### Preguntas de reflexión

1. ¿Qué similitudes existen entre este ejercicio y el de reservas de cine?
2. ¿Qué partes del código cambian y cuáles se mantienen?
3. ¿Por qué es importante definir correctamente los tipos de datos en el schema?

---

### Restricciones generales

- No crear rutas adicionales.
- No agregar campos distintos a los indicados.
- Usar únicamente los conceptos vistos en clase.
- Las pruebas deben realizarse con Postman.

---

### Cierre conceptual

La temática puede cambiar, pero la estructura de una API con Node.js, Mongoose y MongoDB se mantiene.  
Comprender el flujo de datos es más importante que memorizar el código.