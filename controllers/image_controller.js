const { Image } = require('../models/image');

const getAllImages =  async (req,res) => {
    try{
        const allImages = await Image.find({});
        res.status(200).send(allImages);
    } catch (error){
        res.status(400).send(error);
    }
};

const getImageByID =  async (req,res) => {
    try{
        const image = await Image.findOne({_id: req.params.id});
        res.status(200).send(image);
    } catch (error){
        res.status(400).send(error);
    }
};

const addImage = async (req,res) => {
    try{
        const image = await Image.create(req.body);
        res.status(200).send(image);
    } catch (error){
        res.status(400).send(error);
    }
};

const editImageByID = async (req,res) => {
    try{
        const image = await Image.findOne({_id: req.params.id});
        if(!image){
            return res.status(404).send('Image not found');
        }
        if(req.body.name){
            image.name = req.body.name;
        }
        await image.save();
        res.status(200).send(image);
    } catch (error){
        res.status(400).send(error);
    }
};

const deleteImageByID = async (req,res) => {
    try{
        const image = await Image.deleteOne({_id: req.params.id});
        res.status(200).send();
    } catch (error){
        res.status(400).send(error);
    }
};


module.exports = {
    getAllImages,
    getImageByID,
    addImage,
    editImageByID,
    deleteImageByID,
};
