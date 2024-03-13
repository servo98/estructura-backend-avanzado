import mongoose from 'mongoose';

/**
 * 1.- Schema
 * 2.- Ponerle nombre
 */

const authorSchema = new mongoose.Schema({
  name: String,
  lastName: String,
  mail: String,
});

export default mongoose.model('Author', authorSchema);
export { authorSchema };
