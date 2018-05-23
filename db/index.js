const mongoose = require('mongoose');
let connString = "mongodb://comic:comic123@ds219040.mlab.com:19040/comicapi";
const db = mongoose.connection;
mongoose.connect(connString);

db.on('error',function(){
console.log("Error al conectarse a Mongo");
});
db.once('open', function() {
  console.log("Conectado a MongoDB");
});

module.exports ={
  mongoose:mongoose
}