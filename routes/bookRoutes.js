import express from 'express';
import { createBook, getBookById } from '../controllers/bookController.js';

const bookRoutes = express.Router();

// create book
bookRoutes.post('/', createBook);

//get book by id
bookRoutes.get('/:bookId', getBookById);

//TODO: get all books

export default bookRoutes;
