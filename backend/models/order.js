const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
  {
    products: { type: String },
    user: { type: String },
    email: { type: String },
    address: { type: String },
    price: { type: Number },
    order_date: { type: Date },
    payment_mode: {
      type: String,
    },
  },
  { timestamps: true }
);

const Order = mongoose.model("Order", OrderSchema);
// export default Order;
module.exports = { Order };
