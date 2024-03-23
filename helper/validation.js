const Joi = require('joi');

function validateCourse(course) {
    const schema = Joi.object({
        name: Joi.string().min(3).required()
    });

    return schema.validate(course);
}

function validateImage(image){
    const schema = joi.object({
        name: joi.string().min(3).required()
    });

    return schema.validate(image);
}

function validateStudent(student) {
    const schema = Joi.object({
        name: Joi.string().min(3).required()
    });

    return schema.validate(student);
}

module.exports = {
    validateCourse,
    validateImage,
    validateStudent,
};
