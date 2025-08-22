Proyecto:
📌 Sistema de Gestión de Tareas (Task Manager con interfaz web).
Descripción:
Aplicación donde los usuarios pueden registrarse, iniciar sesión y administrar tareas con categorías y estados.
Stack:

Backend: Node.js con Express.

Base de datos: MongoDB + Mongoose.

Views: EJS o Handlebars.

Autenticación: Passport.js o JWT.

Estructura de ficheros MVC:

/models      -> Definición de datos (Tarea, Usuario)
/views       -> Plantillas HTML/EJS
/controllers -> Lógica de negocio
/routes      -> Definición de rutas
/public      -> CSS, JS, imágenes
server.js

Esquema Tarea:
{
"user_id":1,
"title": "Clareo de alarmas",
"description": "Actividad para ejecutar rutina clareo semanal",
"category": "Others",
"status": "Not Started"
}