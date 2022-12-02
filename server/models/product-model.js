const mongoose = require('mongoose');
const Schema = mongoose.Schema


const Product = new Schema({
numberProduct:{type:Number,require:true}
},
{timestamps:true}
)

module.exports = mongoose.model("product",Product);
