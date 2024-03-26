const express = require("express");
const joi = require('joi');
const app = express();
app.use(express.json());

const { courseRouter } = require('./routes/course_router');
const {imageRouter} = require('./routes/image_route');
const {studyGroupRouter} = require('./routes/studyGroup_route');

app.use('/api/courses/', courseRouter);
app.use('/api/images/', imageRouter);
app.use('/api/studyGroups/', studyGroupRouter);


module.exports = {
    app,
};
