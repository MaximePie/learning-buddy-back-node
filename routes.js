const express = require('express');
const router = express.Router();
const stuffCtrl = require('./controllers/lessons');

// Let's put all the routes here.
// If the amount of routes is too big, create a folder and split the file, one file for each entity should do the work

// const Lesson = mongoose.model('Cat', { name: String });

// Methods
router.get('/lessons/', (request, response) => {
  response.status(200).json({
    message: 'Deleted!'
  });
});

router.post('/lessons/', (request, response) => {
  if (request.body) {
    const { title } = request.body;
    console.log(request.body);
    response.status(200).json({message: title});
  }
  else {
    response.status(404).json({message: 'Aucun body trouvé'});
  }
});



module.exports = router;
