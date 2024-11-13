// let students = require("../models/student.model");

// let addStudent = (req, res, next) => {
//   students.push(req.body);
//   res.status(200).json({
//     error: false,
//     message: "Student Added Successfully",
//     data: req.body,
//   });
// };

// let getAllStudent = (req, res, next) => {
//   res.status(200).json({
//     error: false,
//     message: "Student Fetched Successfully",
//     students,
//   });
// };

// let editStudent = (req, res, next) => {
//   let { sid } = req.body;
//   let isStudentAvailable = students.find((student) => {
//     return student.id === Number(sid);
//   });

//   if (isStudentAvailable) {
//     //& Edit Logic
//     let updatedStudents = students.map((student) => {
//       if (student.id === isStudentAvailable.id) {
//         return req.body;
//       }
//       return student;
//     });

//     students = updatedStudents;

//     res.status(201).json({
//       error: false,
//       message: "Student Updated Successfully",
//       data: isStudentAvailable,
//     });
//   } else {
//     res.status(404).json({
//       error: true,
//       message: "Student is not available with given ID",
//       data: null,
//     });
//   }
// };

// let deleteStudent = (req, res, next) => {
//   let { sid } = req.params;
//   let isStudentAvailable = students.find((student) => {
//     return student.id === Number(sid);
//   });

//   if (isStudentAvailable) {
//     //& Delete Logic
//     let filteredStudents = students.filter((student) => {
//       return student.id !== isStudentAvailable.id;
//     });

//     students = filteredStudents;

//     res.status(201).json({
//       error: false,
//       message: "Student Deleted Successfully",
//       data: isStudentAvailable,
//     });
//   } else {
//     res.status(404).json({
//       error: true,
//       message: "Student is not available with given ID",
//       data: null,
//     });
//   }
// };

// module.exports = {
//   addStudent,
//   getAllStudent,
//   editStudent,
//   deleteStudent,
// };

//^ ========================================================

let Students = require("../models/student.model");

let addStudent = async (req, res, next) => {
  try {
    let { ename, age, gender } = req.body;
    let student = await Students.create({ ename, age, gender });
    res.status(201).json({
      error: false,
      message: "Student Added Successfully",
      data: student,
    });
  } catch (err) {
    res.status(500).json({ error: true, message: err.message });
  }
};

// let getAllStudent = (req, res, next) => {};
// let editStudent = (req, res, next) => {};
// let deleteStudent = (req, res, next) => {};

module.exports = {
  addStudent,
  // getAllStudent,
  // editStudent,
  // deleteStudent,
};
