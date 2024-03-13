import express from 'express';
import { createBook } from '../controllers/bookController.js';

const bookRoutes = express.Router();

//TODO: create book
bookRoutes.post('/', createBook);

//TODO: get book by id

//TODO: get all books

export default bookRoutes;
