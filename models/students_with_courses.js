const mongoose = require("mongoose");


const students_with_courses_Scheme = new mongoose.Schema({
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

const students_with_courses = mongoose.model('students_with_courses', students_with_courses_Scheme);

module.exports = {
    students_with_courses,
};
