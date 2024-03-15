import mongoose from 'mongoose';

/**
 * 1.- Crear el schema
 * 2.- Darle nombre
 */

const bookSchema = new mongoose.Schema({
  title: String,
  year: Number,
  genre: String,
  isbn: String,
  authors: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Author',
    },
  ],
});

export default mongoose.model('Book', bookSchema);
