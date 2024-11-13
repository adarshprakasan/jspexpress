// let students = [
//   { name: "John", id: 1, image: "#" },
//   { name: "miller", id: 2, image: "#" },
//   { name: "Smith", id: 3, image: "#" },
// ];

// module.exports = students;

//^ ========================================================

const mongoose = require("mongoose");

let studentSchema = new mongoose.Schema({
  ename: {
    required: true,
    type: String,
  },
  age: Number,
  gender: String,
});

module.exports = mongoose.model("student", studentSchema);
