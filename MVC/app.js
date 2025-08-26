import express from 'express';
import 'dotenv/config'; //Importa variables de entorno
import routesTasks from './routes/tasksRoute.js';
import body_parser from 'body-parser';
import dbClient from './config/dbClient.js';
import routesUsers from './routes/usersRoute.js';
import fs from 'fs';
import cookieParser from "cookie-parser";
import path from 'path';

//GENERA INSTANCIA DE EXPRESS Y OBTIENE EL PUERTO
const app = express();
const port = process.env.PORT || 4000;

// Configura EJS como el motor de plantillas
app.set('view engine', 'ejs');

//DOCUMENTACION CON SWAGGER
import swaggerUI from 'swagger-ui-express';
const swaggerDocumentation = JSON.parse(fs.readFileSync("./swagger.json", "utf8"));

//SERVIR ARCHIVOS ESTATICOS
app.use(express.static(path.join(process.cwd(), "public")));

app.use(body_parser.json()); // Middleware para parsear JSON
app.use(body_parser.urlencoded({ extended: true })); // Middleware para parsear datos URL-encoded
app.use(cookieParser());//Middleware para parsear cookies

//RUTAS
app.use('/tasks',routesTasks);
app.use('/users',routesUsers);
app.use('/api-doc',swaggerUI.serve, swaggerUI.setup(swaggerDocumentation));

// Middleware para manejar errores
app.use((err, res) => {
  console.error(err.stack);
  res.status(500).send('Something broke! '+ err.message);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
}).on('error', (err) => {
  console.error('Server failed to start:', err);
});

process.on('SIGINT', async() => {
  dbClient.disconnectDB().then(() => {
    console.log('Disconnected from MongoDB');
    process.exit(0);
  }).catch((error) => {
    console.error('Error during disconnection:', error);
    process.exit(1);
  });
});