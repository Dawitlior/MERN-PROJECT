const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Department = new Schema(
  {
    numberOfDepartment: { type: Number, require: true },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("department", Department);
