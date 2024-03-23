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

const port = process.env.PORT || 3000;
app.listen(port,() => console.log("listening on port ->  " + port + '.......!'));
