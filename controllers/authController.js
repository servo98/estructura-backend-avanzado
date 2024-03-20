import User from '../models/User.js';
import bcrypt from 'bcrypt';
import jwt from 'jwt-simple';

const register = async (req, res) => {
  try {
    if (!req.body.email || !req.body.password) {
      return res.status(400).json({
        msg: 'Correo o contraseña fantantes',
      });
    }

    const newPassword = await bcrypt.hash(req.body.password, 10);

    req.body.password = newPassword;

    const newUser = await User.create(req.body);

    newUser.password = undefined;
    return res.json({
      msg: 'Usuario creado',
      user: newUser,
    });
  } catch (error) {
    res.status(500).json({
      msg: 'Error al registrar usuario',
    });
  }
};

const login = async (req, res) => {
  //Pedimos password y correo
  if (!req.body.password || !req.body.email) {
    return res.status(400).json({
      msg: 'Bad login',
    });
  }

  try {
    //Buscamos user con ese correo
    const user = await User.findOne({
      email: req.body.email,
    });

    //Si no hay user regresamos un 404
    if (!user) {
      return res.status(404).json({
        msg: 'Usuario no encontrado',
      });
    }

    //Comparar contraseñas
    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (isPasswordCorrect) {
      //crear un token
      const payload = {
        email: user.email,
        role: user.role,
      };
      const token = jwt.encode(payload, process.env.SECRET);
      //regresar un token
      return res.json({
        msg: 'Login correcto',
        token,
      });
    } else {
      return res.status(401).json({
        msg: 'Datos incorrectos',
      });
    }
  } catch (error) {
    res.status(500).json({
      msg: 'Error al hacer login',
      error,
    });
  }
};

export { register, login };
