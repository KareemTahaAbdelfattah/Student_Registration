const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const model = mongoose.model;

const studentScheme = new Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
    },
    groupid: {
        type: mongoose.Schema.Types.ObjectID,
        ref: 'study_group',
    },
    phoneNumber: {
        type: String,
    },
    birthDate: {
        type: String,
    },
    gender: {
        type: String,
    },
    email: {
        type: String,
    },
    password: {
        type: String,
    },
    /*profilePhoto: {
        type: Image,
    }*/
    
});

const student = model('student', studentScheme);

module.exports = {
    student,
};