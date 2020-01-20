const { Router } = require('express');
const DevController = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController');

const routes = Router();

// Tipos de parâmetros
// Query Params: req.query (Filtros, ordenação, paginação, ...)
// Routes Params: req.params(Identificar um recurso na alteração ou remoção)
// Body: req.body (Criação ou alteração de dados)

routes.post('/devs', DevController.store);
routes.get('/devs', DevController.index);
routes.delete('/devs/:id', DevController.destroy);

routes.get('/search', SearchController.index);

module.exports = routes;