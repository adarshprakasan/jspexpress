const express = require("express");

const {
  addEmp,
  // getAllEmp,
  // editEmp,
  // deleteEmp,
} = require("../controllers/employee.controller");

let route = express.Router();

route.post("/addemp", addEmp);
// route.get("/getemp", getEmp);
// route.put("/updateemp/:id", editEmp);
// route.delete("/deleteemp/:id", deleteEmp);

module.exports = route;
