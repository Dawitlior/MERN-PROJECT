const mongoose = require("mongoose");
const CONNECTION_STRING = process.env.CONNECTION_STRING;

mongoose.connect(CONNECTION_STRING,{useNewUrlParser:true,useUnifiedTopology:true,})
.then(()=>{console.log('mongoDB connected')})
.catch((err)=>console.log(err.message));


module.exports = mongoose.connection;

