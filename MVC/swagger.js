import swaggerAutogen from 'swagger-autogen';

const outputFile = './swagger_output.json';
const endpointsFiles = ['./app.js'];

const doc ={
    info:{
        title:'API Gestión de Tareas',
        description: 'API para gestionar tareas con autenticación JWT de usuarios'
    },
    host: 'localhost:3000',
    scheme:'http'
}

swaggerAutogen(outputFile,endpointsFiles,doc);