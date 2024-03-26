const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const model = mongoose.model;

const students_with_courses_Scheme = Schema({
    name: {
        type: String,
        required: true,
    },
    count: {
        type: Number,
    },
    groupid: {
        type: Number, // Changed to Number
    },
    numberOfHours: {
        type: Number,
    },
    term: {
        type: String,
    }
});

const students_with_courses = model('students_with_courses', students_with_courses_Scheme);

module.exports = {
    students_with_courses,
};