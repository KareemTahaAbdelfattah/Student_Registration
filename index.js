const express = require ("express");
const joi = require('joi');
const app = express();
app.use(express.json());

///////////////////////////////////////////
const images = [
    {id: 1, name: "Web RoadMap"},
    {id: 2, name: "BackEnd RoadMap"},
    {id: 3, name: "Frontend RoadMap"},
    {id: 4, name: "Embedded RoadMap"},
    {id: 5, name: "OS RoadMap"}
];

////////////////////////////////////////////

app.get('/', (req,res) => {
    res.send('Hello World');
});

app.get('/api/images', (req,res) => {
    res.send(images);
});


app.get('/api/images/:id', (req,res) => {
    const image = images.find(c => c.id == parseInt(req.params.id));
    if(!image){
        res.status(404).send('The Image with the given ID not found !');
    }else{
        res.send(image);
    }
});


app.post('/api/images',(req,res) => {
    // if(!req.body.name || req.body.name.length<3){
    //     res.status(400).send('Name is required and must be more than 3 characters');
    // }

    const result = validateImage(req.body);
    if(result.error){
        res.status(400).send(result.error.details[0].message);
        console.log(result);
        result;
    }

    const image = {
        id: images.length + 1,
        name: req.body.name
    };

    images.push(image);
    res.send(image);

});


app.put('/api/images/:id',(req,res) => {

    const image = images.find(c => c.id == parseInt(req.params.id));
    if(!image) res.status(404).send('The Image with the given ID not found !');

    const result = validateImage(req.body);

    if(result.error){
        res.status(400).send(result.error.details[0].message);
        console.log(result);
        result;
    }

    image.name = req.body.name;
    res.send(image);

});


app.delete('/api/images/:id', (req,res) => {
    const image = images.find(c => c.id == parseInt(req.params.id));
    if(!image) res.status(404).send('The Image with the given ID not found !');

    const index = images.indexOf(image);
    images.splice(index, 1);

    res.send(image);
});

function validateImage(image){
    const schema = joi.object({
        name: joi.string().min(3).required()
    });

    return schema.validate(image);
}

///////////////////////////////////////////


const port = process.env.PORT || 3000;
app.listen(port,() => console.log("listening on port ->  " + port + '.......!'));
