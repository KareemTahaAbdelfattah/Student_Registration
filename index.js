const { app }= require('./app');
const mongoose = require('mongoose');

const port = process.env.PORT || 3000;
app.listen(port, async () => {
    await mongoose.connect("mongodb+srv://kimotaha52:y3skXTydcmQ1wW2H@cluster0.64mgxgh.mongodb.net/");
    console.log('listening on port ->  ' + port + '  ........');
});