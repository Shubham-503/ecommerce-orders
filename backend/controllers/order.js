const { Order } = require("../models/order");

exports.getAllOrders = (req, res) => {
  Order.find().exec((err, order) => {
    if (err) {
      return res.status(400).json({
        error: "Failed to get order from DB!",
      });
    }
    res.status(200).json(order);
    // res.send("order is coming");
    console.log(order);
    // res.end("Order page");
  });
};
