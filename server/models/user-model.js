const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const User = new Schema({
  id: {type:Number,required:true},
  name: {type:String,required:true},
  email: {type:String,required:true},
  city: {type:String},
  password: {type:String},
});
module.exports = mongoose.model("User", User);

