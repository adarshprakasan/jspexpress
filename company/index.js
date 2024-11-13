const express = require("express");
const mongoose = require("mongoose");

const empRoutes = require("./routes/emp.routes");

let app = express();

mongoose
  .connect("mongodb://127.0.0.1:27017/company")
  .then((data) => {
    console.log("MongoDB Connected Successfully");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(express.json());

app.use("/api/emp/v1", empRoutes);

app.use("*", (req, res) => {
  res.status(404).json({ message: "Page not found" });
});

app.listen(4000, () => {
  console.log("Server is running on PORT 4000");
});
