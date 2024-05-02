const { required } = require('joi');
const mongoose = require('mongoose');

const imagesSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
    },
});

const Image = mongoose.model('images', imagesSchema);

module.exports = { Image, };