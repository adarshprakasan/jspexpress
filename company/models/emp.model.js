const mongoose = require("mongoose");

let empSchema = new mongoose.Schema(
  {
    fname: {
      required: true,
      minlength: 3,
      maxlength: 10,
      type: String,
    },
    lname: {
      type: String,
    },
    email: {
      required: true,
      type: String,
    },
    mob: {
      required: true,
      type: String,
      minlength: 10,
      maxlength: 10,
      pattern: /^[6-9][0-9]{9}+$/,
    },
    password: {
      required: true,
      type: String,
      minlength: 4,
      maxlength: 12,
    },
    gender: {
      required: true,
      type: String,
      enum: ["male", "female", "others"],
    },
    role: {
      required: true,
      type: String,
      enum: ["president", "manager", "assistant", "analyst", "clerk"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("emp", empSchema);
