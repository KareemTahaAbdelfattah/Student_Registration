const express = require ("express");
const joi = require('joi');
const app = express();
app.use(express.json());

const imageController = require('./controllers/image_controller');

app.get('/api/images', imageController.getAllImages);
app.get('/api/images/:id', imageController.getImageByID);
app.post('/api/images', imageController.addImage);
app.put('/api/images/:id', imageController.editImageByID);
app.delete('/api/images/:id', imageController.deleteImageByID);

module.exports = {
    app,
};