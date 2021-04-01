function create(request, response) {
  if (request.body) {
    const { title } = request.body;
    response.status(200).json({message: title});
  }
  else {
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
