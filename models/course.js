const { required } = require('joi');
const mongoose = require('mongoose');

const courseScheme = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    groupid:{
     type:mongoose.Schema.Types.ObjectId,
     ref: 'study_group',
    },
    count: {
        type: Number,
    },

    numberOfHours: {
        type: Number,
    },
    term: {
        type: String,
    },
});

const Course = mongoose.model('Course', courseScheme);

module.exports = {
    Course,
};