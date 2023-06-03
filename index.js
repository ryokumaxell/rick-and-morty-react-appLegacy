const { exec } = require('child_process');
const path = require('path');

const project1Path = path.resolve(__dirname, 'Client/');
const project2Path = path.resolve(__dirname, 'Server/');

// Ejecutar el comando npm start del cliente
const startProject1 = exec('npm start', { cwd: project1Path });
startProject1.stdout.pipe(process.stdout);
startProject1.stderr.pipe(process.stderr);

// Ejecutar el comando npm start del servidor
const startProject2 = exec('npm start', { cwd: project2Path });
startProject2.stdout.pipe(process.stdout);
startProject2.stderr.pipe(process.stderr);
