const { Router } = require('express');
const imageRouter = Router();

const imageController = require('../controllers/image_controller');

imageRouter.get('/', imageController.getAllImages);
imageRouter.get('/:id', imageController.getImageByID);
imageRouter.post('/', imageController.addImage);
imageRouter.put('/:id', imageController.editImageByID);
imageRouter.delete('/:id', imageController.deleteImageByID);

module.exports = {
    imageRouter,
};