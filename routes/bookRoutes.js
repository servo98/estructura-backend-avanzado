import express from 'express';
import {
  createBook,
  getBookById,
  getAllBooks,
} from '../controllers/bookController.js';

const bookRoutes = express.Router();

// create book
bookRoutes.post('/', createBook);

//get book by id
bookRoutes.get('/:bookId', getBookById);

// get all books
bookRoutes.get('/', getAllBooks);

export default bookRoutes;
