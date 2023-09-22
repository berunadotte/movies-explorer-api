const imgRegex = /^https?:\/\/(?:[a-zA-Z0-9_-]+\.)+[a-zA-Z]{2,9}(?:\/[^/]+)*\/[^/]+\.(?:jpg|jpeg|png|gif|bmp|svg|webp)$/i;

const linkRegex = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/;

const ruLetters = /reg virazhenie dlya ru bukv/

const enLetters = /reg virazhenie dlya en bukv/

module.exports = {
  imgRegex,
  linkRegex,
  ruLetters,
  enLetters,
}