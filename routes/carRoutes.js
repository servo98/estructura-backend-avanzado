import express from 'express';
import {
  createCar,
  getAllCars,
  getCarById,
  updateCar,
} from '../controllers/carController.js';

const carRoutes = express.Router();

carRoutes.post('/cars', createCar);
carRoutes.get('/cars', getAllCars);
carRoutes.get('/cars/:carId', getCarById);
carRoutes.put('/cars/:carId', updateCar);

export default carRoutes;
