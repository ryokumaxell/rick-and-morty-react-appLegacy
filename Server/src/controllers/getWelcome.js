const axios = require("axios");

const getWelcome = (req, res) => {
    const data = {
      message: '¡Hola desde el backend!',
      date: new Date()
    };
  
    res.json(data);
  }

  module.exports = getWelcome ;