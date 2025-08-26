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

```
└── 📁MVC
    └── 📁config
        ├── dbClient.js
    └── 📁controllers
        ├── tasksController.js
        ├── usersController.js
    └── 📁helpers
        ├── authentication.js
    └── 📁models
        ├── taskModel.js
        ├── userModel.js
    └── 📁public
        └── 📁js
            ├── functions.js
        ├── task.png
    └── 📁routes
        ├── tasksRoute.js
        ├── usersRoute.js
    └── 📁schemas
        ├── taskScheme.js
        ├── userSchema.js
    └── 📁views
        ├── login.ejs
        ├── profile.ejs
        ├── register.ejs
        ├── tasks.ejs
    ├── .env
    ├── app.js
    ├── package-lock.json
    ├── package.json
    ├── README.md
    ├── swagger.js
    └── swagger.json

Esquema Tarea:
{
"user_id":1,
"title": "Clareo de alarmas",
"description": "Actividad para ejecutar rutina clareo semanal",
"category": "Others",
"status": "Not Started"
}