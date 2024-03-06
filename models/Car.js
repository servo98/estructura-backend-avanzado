import mongoose from 'mongoose';

/**
 * 1.- Crear un schema (esqueleto) ✅
 * 2.- Crear modelo, asignando un nombre ✅
 */

const carSchema = new mongoose.Schema({
  //Campo -> tipo de dato
  plate: String,
  model: String,
  brand: String,
  version: String,
  color: String,
  carType: String,
  vin: String,
});

// NOTE: Cap singular

export default mongoose.model('Car', carSchema);
