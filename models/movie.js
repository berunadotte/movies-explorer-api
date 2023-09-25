const mongoose = require('mongoose');
const { linkRegex, ruLetters, enLetters } = require('../utils/constants');

const movieSchema = new mongoose.Schema({
  country: {
    type: String,
    required: true,
  },
  director: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
    validate: {
      validator: (url) => {
        const urlPattern = linkRegex;
        return urlPattern.test(url);
      },
      message: 'Не правильная ссылка на постер к фильму.',
    },
  },
  trailerLink: {
    type: String,
    required: true,
    validate: {
      validator: (url) => {
        const urlPattern = linkRegex;
        return urlPattern.test(url);
      },
      message: 'Не правильная ссылка на трейлер фильма.',
    },
  },
  thumbnail: {
    type: String,
    required: true,
    validate: {
      validator: (url) => {
        const urlPattern = linkRegex;
        return urlPattern.test(url);
      },
      message: 'Не правильная ссылка на миниатюрное изображения постера к фильму.',
    },
  },
  owner: {
    type: String,
    required: true,
  },
  movieId: {
    type: Number,
    required: true,
  },
  nameRU: {
    type: String,
    required: true,
    validate: {
      validator: (name) => {
        const namePattern = ruLetters;
        return namePattern.test(name);
      },
      message: 'Название фильма должно быть на русском языке.',
    },
  },
  nameEN: {
    type: String,
    required: true,
    validate: {
      validator: (name) => {
        const namePattern = enLetters;
        return namePattern.test(name);
      },
      message: 'Название фильма должно быть на английском языке.',
    },
  },
});

module.exports = mongoose.model('movie', movieSchema);
