let Emp = require("../models/emp.model");

let addEmp = async (req, res, next) => {
  try {
    let { fname, lname, email, mob, password, gender, role } = req.body;
    let fullname = fname + lname;
    let emp = await Emp.create({
      fullname,
      email,
      mob,
      password,
      gender,
      role,
    });
    res.status(201).json({
      error: false,
      message: "Employee Added Successfully",
      data: emp,
    });
  } catch (err) {
    res.status(500).json({ error: true, message: err.message });
  }
};
