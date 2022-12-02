const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Stores = new Schema({
    numberOfStores:{type:Number,require:true}
},
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("stores",Stores);
