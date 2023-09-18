require('dotenv').config();

const mongoose = require('mongoose');
const cors = require('cors');
const express = require('express');

const { PORT = 3000, DB_CONN = 'mongodb://localhost:27017/bitfilmsdb'} = process.env;

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(DB_CONN);


app.listen(PORT, () => {
  console.log('Сервер запущен на ' + PORT + ' порту')
})

