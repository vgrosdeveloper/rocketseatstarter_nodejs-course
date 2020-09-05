const express = require('express');
const routes = express.Router();

const ProductController = require('./controllers/ProductController');

routes.get('/product',ProductController.index);
routes.get('/product/:id',ProductController.show);
routes.post('/product',ProductController.store);
routes.put('/product/:id',ProductController.update);
routes.delete('/product/:id',ProductController.destroy);

module.exports = routes;