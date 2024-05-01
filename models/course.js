const { required } = require('joi');
const mongoose = require('mongoose');

const courseScheme = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    count: {
        type: Number,
    },
    /*groupid: {
        type: Schema.Types.ObjectId,
        ref: 'studyGroups',// Changed to Number
    },*/
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