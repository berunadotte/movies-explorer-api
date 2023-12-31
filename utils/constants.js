const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
  windowsMs: 15 * 60 * 1000,
  max: 100,
});

const imgRegex = /^https?:\/\/(?:[a-zA-Z0-9_-]+\.)+[a-zA-Z]{2,9}(?:\/[^/]+)*\/[^/]+\.(?:jpg|jpeg|png|gif|bmp|svg|webp)$/i;

const linkRegex = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/;

const movieName = /[а-яА-ЯёЁa-zA-Z0-9]/;

module.exports = {
  imgRegex,
  linkRegex,
  movieName,
  limiter,
};
