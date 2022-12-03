const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Categories = new Schema(
  {
    numberOfCategories: { type: Number, require: true },
    year:{type:Number,require:true}
  },
  { timestamps: true }
);

module.exports = mongoose.model("categories", Categories);
