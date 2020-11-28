const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const employeesSchema = new Schema({
  id: {
    type: String,
    required: true,
    text: true
  },
  firstName: {
    type: String,
    required: false
  },
  lastName: {
    type: String,
    required: true
  },
  department: {
    type: String,
    required: true
  },
});

const Employees = mongoose.model("Employees", employeesSchema);

module.exports = Employees;
