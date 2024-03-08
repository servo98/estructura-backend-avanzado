import express from 'express';
import { createCar } from '../controllers/carController.js';

const carRoutes = express.Router();

carRoutes.post('/cars', createCar);

export default carRoutes;
