import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  role: {
    type: String,
    required: true,
    enum: ['ADMIN', 'CLIENT'],
    default: 'CLIENT',
  },
});

export default mongoose.model('User', userSchema);
