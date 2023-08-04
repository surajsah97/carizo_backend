const mongoose = require("mongoose");
const uuid = require("uuid");
const order = mongoose.Schema({
  orderId: { type: String, required: true, default:uuid.v4(),primaryKey: true },
  name: { type: String, required: true },
  status: { type: Number, required: true },
  subTotal: { type: Number, required: true },
  total: { type: Number, required: true },
  tax: { type: Number, required: true },
  cartId:{type: String, required: true},
  taxId: { type: String, required: true },
  totalTax:{ type: Number, required: true },
  quantity:{ type: Number, require: true },
  createdBy: { type: String, required: true },
  createdDate: { type: Number, required: true },
  updatedBy: { type: String, required: true },
  stage:{ type: Number, required: true },
  updatedDate: { type: Number, required: true }
});
module.exports = mongoose.model("order", order);