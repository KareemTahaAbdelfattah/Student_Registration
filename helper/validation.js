const joi = require('joi');

function validateImage(image){
    const schema = joi.object({
        name: joi.string().min(3).required()
    });

    return schema.validate(image);
}

function validateCourse(course) {
    const schema = Joi.object({
        name: Joi.string().min(3).required()
    });

    return schema.validate(course);
}


module.exports = {
    validateImage,
    validateCourse,
};