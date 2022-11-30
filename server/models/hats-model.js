const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Hats = new Schema({
    brand: { type: String },
    color: { type: String },
    year: { type: String },
    price: { type: Number },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("hats", Hats);
