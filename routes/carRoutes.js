import express from 'express';
import {
  createCar,
  getAllCars,
  getCarById,
} from '../controllers/carController.js';

const carRoutes = express.Router();

carRoutes.post('/cars', createCar);
carRoutes.get('/cars', getAllCars);
carRoutes.get('/cars/:carId', getCarById);

export default carRoutes;
