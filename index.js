const { app }= require('./app');
const mongoose= require("mongoose");
const port = process.env.PORT || 3000;
app.listen(port,() =>{
  await mongoose.connect('mongodb+srv://mostafa:DOp2RNfBD4CKyvzc@cluster0.vjpftqg.mongodb.net/test2')
  console.log("listening on port ->  " + port + '.......!'));
