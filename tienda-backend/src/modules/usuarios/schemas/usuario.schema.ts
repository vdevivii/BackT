import { Schema } from 'mongoose';

export const UsuarioSchema = new Schema({
  id: Number,
  name: {
    firstname: String,
    lastname: String,
  },
  email: String,
  password: String,
});
