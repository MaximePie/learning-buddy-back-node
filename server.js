const express = require('express');
const app = express();
const mongoose = require('mongoose');


mongoose.connect('mongodb+srv://MaximePie:homestead@cluster0.otmsg.mongodb.net/test?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

app.get('/haha', (request, response) => {
  response.status(200).json({
    message: 'Deleted!'
  });
});

const port = process.env.PORT || 4001;

app.listen(port, () => console.log(`Listening on port ${port}`));
