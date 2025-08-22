import express from 'express';
import 'dotenv/config'; //Importa variables de entorno
import routesTasks from './routes/tasksRoute.js';
import body_parser from 'body-parser';
import dbClient from './config/dbClient.js';

//GENERA INSTANCIA DE EXPRESS Y OBTIENE EL PUERTO
const app = express();
const port = process.env.PORT || 4000;

app.use(body_parser.json()); // Middleware para parsear JSON
app.use(body_parser.urlencoded({ extended: true })); // Middleware para parsear datos URL-encoded

app.use('/tasks',routesTasks);

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