# EJERCICIO INTEGRADOR -- API HOSPITAL DIGITAL

## Enunciado

La institución Hospital Digital JS desea desarrollar un servicio backend
básico que permita gestionar pacientes y registrar diagnósticos médicos.

Usted deberá construir una API utilizando Node.js y Express que
implemente:

-   Middleware global
-   Middleware local
-   Simulación de roles mediante headers
-   Rutas GET, POST y DELETE
-   Manejo básico de errores
-   Respuestas estructuradas en formato JSON

La aplicación no debe utilizar bases de datos externas ni autenticación
con tokens. Todo debe manejarse en memoria (arrays).

------------------------------------------------------------------------

## Requisitos del sistema

El sistema debe permitir:

1.  Listar pacientes registrados.
2.  Crear nuevos pacientes.
3.  Registrar diagnósticos médicos (solo para usuarios con rol DOCTOR).
4.  Eliminar pacientes (solo para usuarios con rol ADMIN).
5.  Enviar todas las respuestas en formato JSON.
6.  Manejar errores usando códigos HTTP adecuados.
7.  Implementar al menos:
    -   Un middleware global
    -   Dos middlewares locales

------------------------------------------------------------------------

## Simulación de Roles

La verificación de permisos se realizará mediante un header llamado
`rol`, enviado desde Postman.

Valores posibles:

-   DOCTOR
-   ADMIN

Ejemplo de header en Postman:

rol: DOCTOR

------------------------------------------------------------------------

## Endpoints obligatorios

### 1. GET /pacientes

Descripción:\
Devuelve el listado completo de pacientes registrados.

Respuesta esperada: - Información general del hospital (desde middleware
global) - Fecha - Total de pacientes - Lista de pacientes

No requiere rol.

------------------------------------------------------------------------

### 2. POST /pacientes

Descripción:\
Permite registrar un nuevo paciente.

Body requerido (JSON):

{ "nombre": "Juan Pérez", "edad": 40 }

Validaciones: - nombre obligatorio - edad obligatoria

Posibles respuestas: - 201 si se crea correctamente - 400 si faltan
datos

------------------------------------------------------------------------

### 3. POST /diagnostico

Descripción:\
Permite registrar un diagnóstico para un paciente.

Requiere header obligatorio:

rol: DOCTOR

Body requerido (JSON):

{ "pacienteId": 1, "descripcion": "Fiebre alta" }

Validaciones: - Debe existir el rol - El rol debe ser DOCTOR -
pacienteId obligatorio - descripcion obligatoria - El paciente debe
existir

Posibles respuestas: - 200 si es exitoso - 401 si no envía rol - 403 si
el rol no es DOCTOR - 404 si el paciente no existe - 400 si faltan datos

------------------------------------------------------------------------

### 4. DELETE /pacientes/:id

DELETE /pacientes/:id

Descripción:\
Permite eliminar un paciente por su ID.

Requiere header obligatorio:

rol: ADMIN

Validaciones: - Debe existir el rol - El rol debe ser ADMIN - El
paciente debe existir

Posibles respuestas: - 200 si se elimina correctamente - 401 si no envía
rol - 403 si el rol no es ADMIN - 404 si el paciente no existe

------------------------------------------------------------------------

## Significado de los Códigos HTTP utilizados

200 -- OK\
La solicitud fue procesada correctamente.

201 -- Created\
El recurso fue creado exitosamente.

400 -- Bad Request\
La solicitud tiene datos incompletos o inválidos.

401 -- Unauthorized\
No se enviaron credenciales necesarias (en este caso, el rol).

403 -- Forbidden\
Se enviaron credenciales, pero no tienen permiso para realizar la
acción.

404 -- Not Found\
El recurso solicitado no existe.

------------------------------------------------------------------------

## Configuración en Postman

### GET /pacientes

-   Método: GET
-   URL: http://localhost:3000/pacientes
-   No requiere headers
-   No requiere body

### POST /pacientes

-   Método: POST
-   URL: http://localhost:3000/pacientes
-   Body → raw → JSON

{ "nombre": "Laura Gómez", "edad": 29 }

### POST /diagnostico

-   Método: POST
-   URL: http://localhost:3000/diagnostico
-   Headers:

rol: DOCTOR

-   Body → raw → JSON

{ "pacienteId": 1, "descripcion": "Fiebre alta" }

### DELETE /pacientes/:id

Ejemplo:

-   Método: DELETE
-   URL: http://localhost:3000/pacientes/1
-   Headers:

rol: ADMIN

No requiere body.
