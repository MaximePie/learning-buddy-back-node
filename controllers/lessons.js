const mongoose = require('mongoose');
const Lesson = require('../model/lesson');
/**
 * Creates a new Lesson based on the provided data in the request's body
 * @param request
 * @param response
 */
function create(request, response) {
  if (request.body) {
    let errors = [];
    const {label, url, icon} = request.body;

    if (!label) {
      errors.push('Erreur, il faut un label');
    }

    if (!errors.length) {
      Lesson.create({
        label: label,
        url: url || '',
        icon: icon || 'search',
      }, (error, data) => {
        response.status(200).json({message: 'La leçon a bien été créée !', data, error});
      });
    } else {
      response.status(400).json({message: errors});
    }

  } else {
    response.status(404).json({message: 'Aucun body trouvé'});
  }
}

function index(request, response) {
  response.status(200).json({
    message: 'Deleted!'
  });
}


module.exports.index = index;
module.exports.create = create;
