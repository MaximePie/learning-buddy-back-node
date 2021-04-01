require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const { url } = require('./databaseService');

mongoose.connect(url,
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch((error) => console.log(error));

app.get('/haha', (request, response) => {
  response.status(200).json({
    message: 'Deleted!'
  });
});

const port = process.env.PORT || 4001;
console.log(port);

app.listen(port, () => console.log(`Listening on port ${port}`));
