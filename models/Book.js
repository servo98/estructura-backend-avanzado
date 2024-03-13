import mongoose from 'mongoose';
import { authorSchema } from './Author.js';

/**
 * 1.- Crear el schema
 * 2.- Darle nombre
 */

const bookSchema = new mongoose.Schema({
  title: String,
  year: Number,
  genre: String,
  isbn: String,
  authors: [authorSchema],
});

export default mongoose.model('Book', bookSchema);
