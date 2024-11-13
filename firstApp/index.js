const express = require("express");
const mongoose = require("mongoose");

const studentRoutes = require("./routes/student.routes");

let app = express();

mongoose.connect("mongodb://127.0.0.1:27017/college").then(data=>{
  console.log("MongoDB Connected Successfully")
}).catch(err=>{
  console.log(err)
});

app.use(express.json());

app.use("/api/student/v1", studentRoutes);

app.use("*", (req, res) => {
  res.status(404).json({ message: "Page not found" });
});

app.listen(4000, () => {
  console.log("Server is running on PORT 4000");
});
