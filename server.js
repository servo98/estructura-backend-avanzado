//TODO: crear app express

/**
 * 1.- Importar express ✅
 * 2.- Crear app con express ✅
 * 3.- Usar app.listen para abrir puertos
 */
import { connect } from './config.js';
import express from 'express';

connect();

const api = express();

api.listen(8000, () => {
  console.log(' API corriendo en puerto 8000');
});
