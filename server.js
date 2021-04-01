require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const { url } = require('./databaseService');
const bodyParser = require("body-parser");
const cors = require("cors");


app.use(cors());
app.use(bodyParser.json());
mongoose.connect(url,
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch((error) => console.log(error));


const port = process.env.PORT || 4001;
console.log(port);

app.listen(port, () => console.log(`Listening on port ${port}`));
