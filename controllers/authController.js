import User from '../models/User.js';
import bcrypt from 'bcrypt';

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

const login = (req, res) => {};

export { register, login };
