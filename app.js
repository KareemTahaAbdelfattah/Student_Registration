const express = require("express");
const joi = require('joi');
const app = express();
app.use(express.json());

const { courseRouter } = require('./routes/course_router');
const {imageRouter} = require('./routes/image_route');
const {studentRouter} = require('./routes/student_router');

app.use('/api/courses/', courseRouter);
app.use('/api/images/', imageRouter);
app.use('/api/images/', studentRouter);

module.exports = {
    app,
};
