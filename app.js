const express = require ("express");
const joi = require('joi');
const app = express();
app.use(express.json());

const {imageRouter} = require('./routes/image_route');
const { courseRouter } = require('./routes/course_router');
const {studentRouter} = require('./routes/student_router');
const { studentWithCoursesRouter } = require('./routes/students_with_courses_router');
const {studyGroupRouter} = require('./routes/study_group_router');


app.use('/api/images/', imageRouter);
app.use('/api/courses/', courseRouter);
app.use('/api/students/', studentRouter);
app.use('/api/studentsWithCourses/', studentWithCoursesRouter);
app.use('/api/studyGroups/', studyGroupRouter);

module.exports = {
    app,
};
