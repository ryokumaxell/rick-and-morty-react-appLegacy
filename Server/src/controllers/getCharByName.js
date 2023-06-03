const axios = require('axios');

const URL = 'https://rickandmortyapi.com/api/character/';

const getCharsByName = (req, res) => {
  const characterName  = req.params.name;
  
  axios.get(`${URL}?name=${characterName}`)
    .then(response => {
      const results = response.data.results;
      
      if (results.length > 0) {
        const characters = results.map(character => {
          const { id, status, name, species, origin, image, gender } = character;
          return { id, status, name, species, origin, image, gender };
        });
        res.json(characters);
      } else {
        res.status(404).json({ message: 'No characters found' });
      }
    })
    .catch(error => {
      res.status(500).json({ message: error.message });
    });
};

module.exports = getCharsByName;
