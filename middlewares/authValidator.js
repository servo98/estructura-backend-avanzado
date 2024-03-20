import jwt from 'jwt-simple';

const authValidator = (req, res, next) => {
  //Obtener token de los headers
  const token = req.headers['authorization'];
  //Valido que si venga el token
  if (!token) {
    return res.status(403).json({
      msg: 'Authorization header missing',
    });
  }

  //Validar que el token sea original
  try {
    const payload = jwt.decode(token, process.env.SECRET);

    req.role = payload.role;
    next();
  } catch (error) {
    return res.status(403).json({
      msg: 'Token malo',
    });
  }
};

export { authValidator };
