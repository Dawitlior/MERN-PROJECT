const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Orders = new Schema(
  {
    numberOrder: { type: Number, require: true },
    name: { type: String, require: true },
    address: { type: String, require: true },
    deliveryTime: { type: String, require: true },
    numberProduct: { type: Number, require: true },
    price: { type: Number, require: true },
    previousOrder: { type: Number },
    year: { type: Number, require: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("orders", Orders);
