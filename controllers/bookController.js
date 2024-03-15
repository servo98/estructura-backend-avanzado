import Book from '../models/Book.js';
import Author from '../models/Author.js';

const createBook = async (req, res) => {
  try {
    /**
     * 1.- Registrar Authors en DB ✅
     * 2.- Registrar Book con esos authors ✅
     */
    const { authors, book } = req.body;

    if (!Array.isArray(authors) || !book) {
      return res.status(400).json({
        msg: 'Body incorrecto',
      });
    }

    //[objs] -> [Promesas]
    const authorPromises = authors.map((elem) => {
      return Author.create(elem);
    });

    const authorModels = await Promise.all(authorPromises);

    //[models] -> [ids]

    const authorIds = authorModels.map((model) => {
      return model.id;
    });

    book.authors = authorIds;

    const newBook = await Book.create(book);

    return res.json(newBook);
  } catch (error) {
    res.status(500).json({
      msg: 'Error al crear book',
      error,
    });
  }
};

// const createBook = async (req, res) => {
//   try {
//     /**
//      * req.body {
//      *  authors []
//      *  book
//      * }
//      */
//     /**
//      * 1.- Crear autores
//      * 2.- Crear libro
//      */

//     let authorsData = req.body.authors;
//     const bookData = req.body.book;

//     if (!authorsData || !bookData) {
//       res.status(400).json({
//         msg: 'authorsData or bookData missing',
//       });
//     }

//     if (!Array.isArray(authorsData)) {
//       res.status(400).json({
//         msg: 'authorsData must be an array ',
//       });
//     }

//     //Crear autores
//     //  [objetos]  -> [schemas]
//     authorsData = authorsData.map((author) => {
//       return new Author(author);
//     });

//     //crear libro con autores de arriba

//     const newBook = await Book.create({
//       genre: bookData.genre,
//       isbn: bookData.isbn,
//       title: bookData.title,
//       year: bookData.year,
//       authors: authorsData,
//     });

//     res.json(newBook);
//   } catch (error) {
//     res.status(500).json({
//       msg: 'Error al crear Book',
//       error,
//     });
//   }
// };

const getBookById = async (req, res) => {
  try {
    //buscar un libro por id
    const book = await Book.findById(req.params.bookId).populate('authors');

    if (!book) {
      return res.status(404).json({
        msg: 'Libro no encontrado',
      });
    }

    //responder ese libro
    return res.json(book);
  } catch (error) {
    res.status(500).json({
      msg: 'Error al buscar libro por id',
      error,
    });
  }
};

const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find({});
    if (!books) {
      return res.status(404).json({
        msg: 'Libros no encontrados',
      });
    }
    return res.json(books);
  } catch (error) {
    res.status(500).json({
      msg: 'Error al buscar todos los libros',
      error,
    });
  }
};

export { createBook, getBookById, getAllBooks };
