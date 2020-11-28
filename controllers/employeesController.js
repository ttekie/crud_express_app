const Employees = require('./../models/employees');

//show the list of employees
const index = (req, res, next) => {
  Employees.find()
  .then(response => {
    res.json({
      response
    });
  });
  .catch(error => {
    res.json({
      message: 'An error Occured!'
    });
  });
}
// show a single employee
const show = (req, res, next) => {
  let employeeID = req.body.employeeID
  Employees.findByID(employeeID)
  .then(response => {
    res.json({
      response
    });
  });
  .catch(error => {
    res.json({
      message: 'An error Occured!'
    });
  });
}

// add new employee
const store = (req, res, next) => {
  let employee = new Employees({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    department: req.body.department,
    id: uniqid()
  });
  employee.save();
  .then(response =>{
    res.json({
      message:'Employee Added Successfully'
    });
  });
  .catch(error => {
    res.json({
      message: 'An error Occured!'
    });
  });
}

// update an employee
const update = (req, res, next) => {
  let employeeID = req.body.employeeID

  let updatedData = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    department: req.body.department,
    id: uniqid()
  }

  Employees.findByIdAndUpdate(employeeID, {$set: updatedData})
  .then(() => {
    res.json({
      message: 'Employee updated Successfully!'
    });
  });
  .catch(error => {
    res.json({
      message: 'An error Occured!'
    });
  });
}

// delete an employee
const destroy = (req, res, next) => {
  let employeeID = req.body.employeeID
  Employees.findByIdAndRemove(employeeID)
  .then(() => {
    req.json({
        message: 'Employee deleted Successfully!'
    });
  });
  .catch(error => {
    res.json({
      message: 'An error Occured!'
    });
  });
}

module.exports = {
  index, show, store, update, destroy
}
