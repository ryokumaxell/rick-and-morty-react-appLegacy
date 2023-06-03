const express = require('express');
const router = require('./routes/index');
const server = express();
const PORT = 3001;
//const cors = require("cors")



// Middleware para configurar los headers de CORS
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.header(
    'Access-Control-Allow-Methods',
    'GET, POST, OPTIONS, PUT, DELETE'
  );
  next();
});



// Middleware para parsear el body como JSON
server.use(express.json());

// Middleware para agregar "/rickandmorty" antes de cada ruta
server.use('/rickandmorty/api', router);

// Iniciar el servidor
server.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
