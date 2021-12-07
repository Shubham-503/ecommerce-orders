const express = require("express");
const mongoose = require("mongoose");
var cors = require("cors");
const { getAllOrders } = require("./controllers/order");
const app = express();
const PORT = 8000;

app.use(cors());
app.get("/", (req, res) => {
  res.send("hello world");
});

app.get("/order", getAllOrders);

// DB CONNECTION
mongoose
  .connect("mongodb://localhost:27017/EcomOrder")
  .then(() => {
    console.log("DB CONNECTED!!!!!");
  })
  .catch((e) => {
    console.log("OOPS DB NOT CONNECTED ", e);
  });

//SERVER IS LISTENING
app.listen(PORT, () => {
  console.log(`Server is listening at port ${PORT}`);
});
