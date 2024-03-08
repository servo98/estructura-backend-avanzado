import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connect = () => {
  mongoose.connect(process.env.DB_URI);

  const connection = mongoose.connection;

  //callback
  connection.once('open', () => {
    console.log('Conexión exitosa a base de datos');
  });

  connection.once('error', () => {
    console.error('Error al conectarse a la BD');
  });
};

export { connect };
