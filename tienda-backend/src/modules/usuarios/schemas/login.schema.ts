import { Schema } from 'mongoose';

export const UsuarioSchema = new Schema({
  id: Number,
  username: String,
  email: String,
  password: String,
  name: {
    firstname: String,
    lastname: String,
  },
  phone: String,
  address: {
    geolocation: {
      lat: Number,
      long: Number,
    },
    city: String,
    street: String,
    number: Number,
    zipcode: String,
  },
});
