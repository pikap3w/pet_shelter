const pets_controller = require('../controllers/pets_controller'),
  path = require('path');

// routes are first checked here, in Express
module.exports = (app) => {
  app.get('/api/pets', pets_controller.pets);
  app.get('/api/pets/:id', pets_controller.pet);
  app.post('/api/pets/new', pets_controller.create);
  app.delete('/api/pets/:id', pets_controller.delete);
  app.put('/api/pets/:id', pets_controller.update);
	app.put('/api/pets/:id/like', pets_controller.like);

  // if no Express routes match, go back to Angular
  app.all('*', (req, res, next) => {
    res.sendFile(path.resolve('./public/dist/Pets/index.html'))
  });
};
