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

function validateStudyGroup(studyGroup){
    const schema = joi.object({
        name: joi.string().min(3).required()
    });
    return schema.validate(image);
}

module.exports = {
    validateCourse,
    validateImage,
    validateStudyGroup,
};
