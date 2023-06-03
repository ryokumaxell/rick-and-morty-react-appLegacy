const users = require('../utils/user');

const login = (req, res) => {
  // Obtener los datos de email y password desde Query
  const { email, password } = req.query;
  const parsedPassword = parseInt(password);

 

  // Verificar si hay un usuario que coincida con los datos recibidos
  const user = users.find(
    (user) => user.email === email && user.password === parsedPassword
    
  );
  
  // Verificar si se encontró un usuario válido
  if (user) {
    // Usuario válido, devolver respuesta con acceso permitido
    res.status(200).json({ access: true });
  } else {
    // Usuario inválido, devolver respuesta con acceso denegado
    res.status(200).json({ access: false });
  }
};

module.exports = login;
