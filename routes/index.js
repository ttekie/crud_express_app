var express = require('express');
var uniqid = require('uniqid');
var router = express.Router();

const employees = [
  {
    firstName: 'Steve',
    lastName: 'Brown',
    department: 'Engineering',
    id: uniqid()
  },
  {
    firstName: 'Janine',
    lastName: 'Smith',
    department: 'Marketing',
    id: uniqid()
  },
  {
    firstName: 'Karen',
    lastName: 'Jones',
    department: 'Sales',
    id: uniqid()
  },
  {
    firstName: 'Ben',
    lastName: 'Williams',
    department: 'Administration',
    id: uniqid()
  }
]

/* API - READ - Get all employees */
router.get('/all', (req, res, next) => {
  res.json({staff: employees});
});

/* API - Delete the last item. */
router.get('/delete', (req, res, next) => {
  console.log('DELETE END POINT WORKS');
  employees.pop();
  res.render('index', { staff: employees, title: 'Express', header: 'Remove the last item' });
});

/* API - CREATE -Endpoint - Post handele new staff member post/submission. */
router.post('/new', (req, res, next) => {
  // extract new staff member from the body
  let member = req.body;
  let firstName = member.firstName;
  let lastName = member.lastName;
  let department = member.department;
  let id = uniqid()

  console.log("You have submmited the staff member name: ");
  console.log("staff member last name: " + lastName);
  console.log("staff member department: " + department);

  /* Create a new staff object and add a employee object to the employees array */
  let new_staff = {
    firstName: firstName,
    lastName: lastName,
    department: department,
    id: uniqid()
  }
  employees.push(new_staff);
  res.redirect('/');
});
// API - UPDATE endpoint
router.put('/update/:id', (req, res, next) => {
  let id = req.params.id;
  let member = req.body;
  let firstName = member.firstName;
  let lastName = member.lastName;
  let department = member.department;

  // create a new employee object with the updated value
  let updatedemployee = { firstName: firstName, lastName: lastName, department: department, id: id }
  // updating the employee with the given id
  for(let i = 0; i < employees.length; i++) {
    if (employees[i].id == id){
      employees[i] = updatedemployee;
    }
  }
  // send back updated list of employees
  res.send(employees);
});

module.exports = router;
