import express from 'express';
import {
  createCar,
  getAllCars,
  getCarById,
  updateCar,
  deleteCar,
} from '../controllers/carController.js';
import { authValidator } from '../middlewares/authValidator.js';
import { isAdmin } from '../middlewares/isAdmin.js';

const carRoutes = express.Router();

carRoutes.route('/').post(createCar).get(authValidator, isAdmin, getAllCars);
carRoutes.route('/:carId').get(getCarById).put(updateCar).delete(deleteCar);

// carRoutes.post('/', createCar);
// carRoutes.get('/', getAllCars);
// carRoutes.get('/:carId', getCarById);
// carRoutes.put('/:carId', updateCar);
// carRoutes.delete('/:carId', deleteCar);

export default carRoutes;
