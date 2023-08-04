const mongoose = require("mongoose");
const uuid = require("uuid");
const cart = mongoose.Schema({
  cartId: { type: String, required: true, primaryKey: true },
  name: { type: String, required: true },
  status: { type: Number, required: true },
  subTotal: { type: Number, required: true },
  total: { type: String, required: true },
  tax: { type: String, required: true },
  price: { type: Number, required: true },
  quantity:{ type: Number, require: true },
  itemId: { type: String, required: true },
  superCatId: { type: String, require: true },
  catId:{ type: String, require: true },
  createdBy: { type: String, required: true },
  createdDate: { type: Number, required: true },
  updatedBy: { type: String, required: true },
  updatedDate: { type: Number, required: true }
});
module.exports = mongoose.model("cart", cart);
