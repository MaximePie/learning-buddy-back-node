const express = require('express');
const router = express.Router();
const lessonsController = require('./controllers/lesson');
const chapterController = require('./controllers/chapter');

// Let's put all the routes here.
// If the amount of routes is too big, create a folder and split the file, one file for each entity should do the work

// Lessons
router.get('/lessons/', lessonsController.index);
router.post('/lessons/', lessonsController.create);

// Chapters
router.get('/chapters/', chapterController.index);
router.post('/chapters/', chapterController.create);



module.exports = router;
