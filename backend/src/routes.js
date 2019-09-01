const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');
const PostoController = require('./controllers/PostController');

const routes = new express.Router();
const upload = multer(uploadConfig);

routes.get('/posts', PostoController.index);
routes.post('/posts', upload.single('image'),PostoController.store);

module.exports = routes;