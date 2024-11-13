const express = require("express");

const {
  addStudent,
  // getAllStudent,
  // editStudent,
  // deleteStudent,
} = require("../controllers/students.controller");

let route = express.Router();

route.post("/addstudent", addStudent);
// route.get("/getstudents", getAllStudent);
// route.put("/updatestudent/:sid", editStudent);
// route.delete("/deletestudent/:sid", deleteStudent);

module.exports = route;
