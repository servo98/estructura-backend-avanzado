//TODO: crear app express

/**
 * 1.- Importar express ✅
 * 2.- Crear app con express ✅
 * 3.- Usar app.listen para abrir puertos
 */
import { connect } from './config.js';
import express from 'express';
import carRoutes from './routes/carRoutes.js';
import bookRoutes from './routes/bookRoutes.js';

connect();

const api = express();

api.use(express.json());

api.listen(8000, () => {
  console.log('API corriendo en puerto 8000');
});

//String (nombre de la ruta)
api.get('/test', (req, res) => {
  res.send('Hola es to es una prueba desde terminal');
});

api.use('/cars', carRoutes);
api.use('/books', bookRoutes);
