# Proyecto Final – SkillSwap API

## Descripción del proyecto

SkillSwap es una plataforma donde las personas pueden **intercambiar habilidades entre sí sin utilizar dinero**.  
La idea es que los usuarios puedan enseñar algo que saben hacer y, a cambio, aprender una habilidad de otra persona.

Ejemplo:

- Ana sabe **diseño gráfico**
- Luis sabe **programación**
- Ana puede enseñarle diseño a Luis a cambio de aprender programación

El objetivo de este proyecto es construir una **API REST utilizando Node.js, Express y MongoDB** que permita gestionar usuarios, habilidades y solicitudes de intercambio.

---

# Objetivos de aprendizaje

Este proyecto integrará los siguientes conceptos vistos durante el curso:

- Creación de servidores con **Node.js**
- Desarrollo de **APIs con Express.js**
- Uso de **middleware**
- Conexión con **MongoDB**
- Modelado de datos con **Mongoose**
- Autenticación usando **JWT**
- Manejo centralizado de **errores**
- Organización profesional de un proyecto backend

---

# Contexto del sistema

Los usuarios podrán:

1. Registrarse en la plataforma
2. Iniciar sesión
3. Crear habilidades que pueden enseñar
4. Explorar habilidades de otros usuarios
5. Solicitar intercambios de habilidades
6. Aceptar o rechazar solicitudes

El sistema se implementará como una **API REST**.

---

# Requisitos técnicos

El proyecto debe utilizar obligatoriamente:

- Node.js
- Express.js
- MongoDB
- Mongoose
- JSON Web Token (JWT)
- Middlewares personalizados
- Manejo centralizado de errores
- Arquitectura modular por carpetas

---

# Estructura sugerida del proyecto
skillswap-api/
├── src/
│   ├── config/            
│   ├── controllers/     
│   ├── services/        
│   ├── models/          
│   ├── routes/          
│   ├── middlewares/     
│   ├── utils/           
│   ├── app.js           # Configuración de Express
│   └── server.js        # Punto de entrada
│
├── .env                 
├── .gitignore           
├── package.json    
└── README.md            # Documentación del proyecto


# Modelos de datos

El sistema debe manejar al menos **tres colecciones principales en MongoDB**.

---

## Usuario (User)

Un usuario representa a una persona registrada en la plataforma.

Campos sugeridos:

- name
- email
- password
- bio
- location
- createdAt

Consideraciones:

- El **email debe ser único**
- La **contraseña debe almacenarse de forma segura**
- Un usuario puede tener **varias habilidades registradas**

---

## Habilidad (Skill)

Representa una habilidad que un usuario puede enseñar.

Ejemplos:

- Programación en JavaScript
- Diseño gráfico
- Fotografía
- Cocina italiana
- Edición de video

Campos sugeridos:

- title
- description
- level (beginner, intermediate, expert)
- owner (referencia al usuario que posee la habilidad)
- createdAt

Consideraciones:

- Cada habilidad pertenece a **un único usuario**
- Un usuario puede tener **muchas habilidades**

---

## Solicitud de intercambio (SwapRequest)

Representa una solicitud de intercambio entre dos usuarios.

Ejemplo:

Un usuario ofrece **una habilidad propia** a cambio de aprender **una habilidad de otro usuario**.

Campos sugeridos:

- requester (usuario que envía la solicitud)
- receiver (usuario que recibe la solicitud)
- offeredSkill
- requestedSkill
- message
- status (pending, accepted, rejected)
- createdAt

Consideraciones:

- Una solicitud comienza con estado **pending**
- El usuario receptor puede **aceptar o rechazar**
- Solo el **receptor** puede cambiar el estado de la solicitud

---

# Endpoints mínimos requeridos

La API debe implementar al menos los siguientes endpoints.

---

# Autenticación

## Registro de usuario
```text
{
"name": "Ana",
"email": "ana@email.com
",
"password": "123456"
}
```

---

## Login
POST /api/auth/login

Body de ejemplo:
```text
{
"email": "ana@email.com
",
"password": "123456"
}
```

Respuesta esperada:
```text
{
"token": "JWT_TOKEN"
}
```

El token se utilizará para acceder a **rutas protegidas**.

---

# Usuarios

## Obtener perfil del usuario autenticado

El token se utilizará para acceder a **rutas protegidas**.

---

# Usuarios

## Obtener perfil del usuario autenticado
GET /api/users/me


Debe devolver la información del usuario autenticado.

---

## Actualizar perfil
PUT /api/users/me


Permite modificar campos como:

- name
- bio
- location

---

# Habilidades

## Crear habilidad
POST /api/skills


Body de ejemplo:
```text
{
"title": "JavaScript",
"description": "Puedo enseñar fundamentos y backend con Node",
"level": "intermediate"
}
```

---

## Listar habilidades
GET /api/skills


Opcionalmente puede incluir filtros como:
GET /api/skills?level=expert
GET /api/skills?search=javascript


---

## Obtener una habilidad
GET /api/skills/:id


Devuelve la información completa de la habilidad.

---

## Actualizar habilidad
PUT /api/skills/:id


Solo el **usuario dueño de la habilidad** debe poder modificarla.

---

## Eliminar habilidad
DELETE /api/skills/:id

Solo el **usuario dueño** debe poder eliminarla.
# Intercambios de habilidades

El sistema debe permitir a los usuarios **solicitar intercambios de habilidades entre sí**.

Una solicitud de intercambio implica que:

- Un usuario ofrece **una de sus habilidades**
- A cambio de aprender **una habilidad de otro usuario**

---

## Crear solicitud de intercambio
POST /api/swaps


Body de ejemplo:
```text
{
"requestedSkillId": "ID_SKILL_DEL_OTRO_USUARIO",
"offeredSkillId": "ID_DE_MI_SKILL",
"message": "Me gustaría aprender diseño a cambio de enseñarte JavaScript"
}
```

Consideraciones:

- El usuario debe estar autenticado
- Solo puede ofrecer **habilidades que le pertenezcan**
- No se puede solicitar intercambio con uno mismo

---

## Ver solicitudes recibidas
GET /api/swaps/received


Debe devolver todas las solicitudes donde el usuario autenticado sea el **receiver**.

---

## Ver solicitudes enviadas
GET /api/swaps/sent


Debe devolver todas las solicitudes donde el usuario autenticado sea el **requester**.

---

## Aceptar solicitud
PATCH /api/swaps/:id/accept

Consideraciones:

- Solo el **usuario receptor** puede aceptar
- El estado debe cambiar a **accepted**

---

## Rechazar solicitud
PATCH /api/swaps/:id/reject

Consideraciones:

- Solo el **usuario receptor** puede rechazar
- El estado debe cambiar a **rejected**

---

# Requisitos de implementación

El proyecto debe incluir obligatoriamente:

- Autenticación usando **JWT**
- Middleware para **proteger rutas**
- Validación de datos en las solicitudes
- Manejo centralizado de errores
- Separación de responsabilidades usando:
  - controllers
  - services
  - models
  - routes
- Uso de **Mongoose para relaciones entre colecciones**

---

# Criterios de evaluación

## Arquitectura del proyecto

- Organización clara de carpetas
- Separación de responsabilidades
- Uso adecuado de controllers y services

---

## API

- Uso correcto de métodos HTTP
- Endpoints claros y consistentes
- Respuestas JSON bien estructuradas

---

## Base de datos

- Modelos correctamente definidos
- Relaciones entre documentos usando referencias
- Uso adecuado de Mongoose

---

## Seguridad

- Uso correcto de **JWT**
- Protección de rutas que requieren autenticación
- Validación de datos de entrada

---

## Calidad del código

- Código limpio y legible
- Buenas prácticas de desarrollo
- Nombres claros en variables y funciones

---
# Bonus para escalar el proyecto (Avanzado)

Para estudiantes que quieran extender el proyecto:

- Sistema de **búsqueda de habilidades**
- **Paginación** de resultados
- Sistema de **calificaciones entre usuarios**
- Sistema de **notificaciones**

