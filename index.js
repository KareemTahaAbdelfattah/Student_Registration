const express = require ("express");
const joi = require('joi');
const app = express();
app.use(express.json());

///////////////////////////////////////////
const images = [
    {id: 1, mame: "Web RoadMap"},
    {id: 2, mame: "BackEnd RoadMap"},
    {id: 3, mame: "Frontend RoadMap"},
    {id: 4, mame: "Embedded RoadMap"}
];

////////////////////////////////////////////

app.get('/', (req,res) => {
    res.send('Hello World');
});

app.get('/api/images', (req,res) => {
    res.send(images);
});

///////////////////////////////////////////


const port = process.env.PORT || 3000;
app.listen(port,() => console.log("listening on port ->  " + port + '.......!'));