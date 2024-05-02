const mongoose = require("mongoose");


const studentswithCoursesScheme = new mongoose.Schema({
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
    },
});

const students_with_courses = mongoose.model('students_with_courses', studentswithCoursesScheme);

module.exports = {
    students_with_courses,
};
