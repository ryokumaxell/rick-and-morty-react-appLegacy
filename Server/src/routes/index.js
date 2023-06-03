// Importar los controladores
const getAllChar = require('../controllers/getAllChar');
const getCharByName = require('../controllers/getCharByName');
const login = require('../controllers/login');
const {postFav,deleteFav} = require('../controllers/handleFavorites');
 
// Importar la función Router de express
const { Router } = require('express');

// Crear una instancia de Router
const router = Router();

// Definir las rutas
router.get('/character', getAllChar);
router.get('/character/:name', getCharByName);
router.get('/login', login);
router.post('/fav', postFav);
router.delete('/fav/:id', deleteFav);

// Exportar el router
module.exports = router;
