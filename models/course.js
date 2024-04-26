const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const model = mongoose.model;

const courseScheme = Schema({
    name: {
        type: String,
        required: true,
    },
    count: {
        type: Number,
    },
    groupid: {
        type:Schema.Types.ObjectId ,
        ref:'studyGroups',// Changed to Number
    },
    numberOfHours: {
        type: Number,
    },
    term: {
        type: String,
    }
});

const Course = model('Course', courseScheme);

module.exports = {
    Course,
};
