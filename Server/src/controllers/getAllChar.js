const axios = require("axios");

const getAllChar = (req, res) => {
  axios(`https://rickandmortyapi.com/api/character/`)
    .then((response) => {
      const character = response.data;

      if (character) {
        res.json(character);
      } else {
        res.status(404).json({ message: "Not found" });
      }
    })
    .catch((error) => {
      res.status(500).json({ message: error.message });
    });
};

module.exports = getAllChar;
