// Declara el arreglo vacío myFavorites
let myFavorites = [];

// Función postFav para agregar un personaje a favoritos
const postFav = (req, res) => {
  // Obtiene el personaje del body de la solicitud
  const character = req.body;

  // Agrega el personaje a myFavorites
  myFavorites.push(character);

  // Devuelve myFavorites en formato JSON
  res.json(myFavorites);
};

// Función deleteFav para eliminar un personaje de favoritos
const deleteFav = (req, res) => {
  // Obtiene el id del personaje de los parámetros de la solicitud
  const characterId = req.params.id;

  // Filtra myFavorites para eliminar el personaje con el mismo id
  myFavorites = myFavorites.filter((character) => character.id !== characterId);

  // Devuelve myFavorites en formato JSON
  res.json(myFavorites);
};

// Exporta las funciones postFav y deleteFav
module.exports = { postFav, deleteFav };
