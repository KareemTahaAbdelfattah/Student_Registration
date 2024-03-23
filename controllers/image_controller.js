const joi = require('joi');
const { images } = require('../models/image');
const { validateImage } = require('../helpers/validation');

const getAllImages =  (req,res) => {
    res.send(images);
};

const getImageByID =  (req,res) => {
    const image = images.find(c => c.id == parseInt(req.params.id));
    if(!image){
        res.status(404).send('The Image with the given ID not found !');
    }else{
        res.send(image);
    }
};

const addImage = (req,res) => {

    const result = validateImage(req.body);
    if(result.error){
        res.status(400).send(result.error.details[0].message);
        console.log(result);
        result;
    }

    const image = {
        id: images.length + 1,
        name: req.body.name
    };

    images.push(image);
    res.send(image);

};

const editImageByID = (req,res) => {

    const image = images.find(c => c.id == parseInt(req.params.id));
    if(!image) res.status(404).send('The Image with the given ID not found !');

    const result = validateImage(req.body);

    if(result.error){
        res.status(400).send(result.error.details[0].message);
        console.log(result);
        result;
    }

    image.name = req.body.name;
    res.send(image);

};

const deleteImageByID = (req,res) => {
    const image = images.find(c => c.id == parseInt(req.params.id));
    if(!image) res.status(404).send('The Image with the given ID not found !');

    const index = images.indexOf(image);
    images.splice(index, 1);

    res.send(image);
};


module.exports = {
    getAllImages,
    getImageByID,
    addImage,
    editImageByID,
    deleteImageByID,
};