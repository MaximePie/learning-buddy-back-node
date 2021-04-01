const express = require('express');
const router = express.Router();
const lessonsController = require('./controllers/lesson');

// Let's put all the routes here.
// If the amount of routes is too big, create a folder and split the file, one file for each entity should do the work

// Lessons
router.get('/lessons/', lessonsController.index);
router.post('/lessons/', lessonsController.create);



module.exports = router;
