const { required } = require('joi');
const mongoose = require('mongoose');

const studyGroupSchema = new mongoose.Schema({
    groupid: {
        type: Number,
        required: true,
    },
    cohortname: {
        type: String,
        required: true,
    },
    cohortnumber: {
        type: Number,
        required: true,
    },
});

const Study_group = mongoose.model('study_group', studyGroupSchema);

module.exports = { Study_group, };
