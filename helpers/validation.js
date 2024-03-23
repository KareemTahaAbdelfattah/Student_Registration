const joi = require('joi');

function validateImage(image){
    const schema = joi.object({
        name: joi.string().min(3).required()
    });

    return schema.validate(image);
}

module.exports = {
    validateImage,

};