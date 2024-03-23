const express = require ("express");
const joi = require('joi');
const app = express();
app.use(express.json());

const {imageRouter} = require('./routes/image_route');

app.use('/api/images/', imageRouter);

module.exports = {
    app,
};
