const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const InformationPage = new Schema(
  {
    numberOfPages: { type: Number, require: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("informationPage", InformationPage);
