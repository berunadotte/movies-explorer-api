const mongoose = require('moongose');

const userSchema = new mongoose.Schema({

  email: {
    type: String,
    unique: true,
    required: true,
    validate: {
      validator: validator.isEmail,
      message: 'Не правильный формат почты.'
    },
  },
  password: {
    type: String,
    required: true,
    select: false, // tut dolzhen bit' hash i on ne dolzhen vozvrawat'sya
  },
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30, // mozhno dobavit' validation tolko russkie bukvi i pervaya zaglavnaya, nu ili delat' ee zaglavnoy
  },

})