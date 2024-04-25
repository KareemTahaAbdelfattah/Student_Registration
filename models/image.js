const mongoose = require('mongoose');

const imagesSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
});

const Image = mongoose.model('images', imagesSchema);

module.exports = { images, };
