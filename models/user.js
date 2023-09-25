const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcrypt');
const AuthorizationError = require('../errors/authorizationError');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
    validate: {
      validator: validator.isEmail,
      message: 'Не правильный формат почты.',
    },
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
});

userSchema.statics.findUserByCredentials = function (email, password) {
  return this.findOne({ email }).select('+password')
    .then((user) => {
      if (!user) {
        return Promise.reject(new AuthorizationError('Неправильные почта или пароль.'));
      }
      return bcrypt.compare(password, user.password)
        .then((matched) => {
          if (!matched) {
            return Promise.reject(new AuthorizationError('Неправильные почта или пароль.'));
          }
          return user;
        });
    });
};

module.exports = mongoose.model('user', userSchema);
