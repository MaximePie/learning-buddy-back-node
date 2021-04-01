const Chapter = require('../model/chapter');

/**
 * Creates a new Lesson based on the provided data in the request's body
 * @param request
 * @param response
 */
function create(request, response) {
  if (request.body) {
    let errors = [];
    const {title, order} = request.body;

    if (!title) {
      errors.push('Erreur, il faut un title');
    }

    if (order === undefined) {
      errors.push('Erreur, il faut un order');
    }

    if (!errors.length) {
      Chapter.create({
        title,
        order,
        lessons: [],
      }, (error, data) => {
        response.status(200).json({message: 'Le chapitre a bien été créée !', data, error});
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
