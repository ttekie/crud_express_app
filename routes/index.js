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

// Get all employees
router.get('/all', (req, res, next) => {
  res.json({staff: employees});
});

/* Delete the last item. */
router.get('/delete', (req, res, next) => {
  console.log('DELETE END POINT WORKS');
  employees.pop();
  res.render('index', { staff: employees, title: 'Express', header: 'Remove the last item' });
});

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { staff: employees, title: 'Express', header:'crud express application ' });
});

/* Get New staff page. Show the page */
router.get('/new', (req, res, next) => {
  res.render('staff', { title: 'New form page', header: 'New added staff page' });
});

/* Post handele new staff member post/submission. */
router.post('/new', (req, res, next) => {
  let content = req.body;
  let firstName = content.firstName;
  let lastName = content.lastName;
  let department = content.department;
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

router.put('/update/:id', (req, res, next) => {
  let id = req.params.id;
  let content = req.body;
  let firstName = content.firstName;
  let lastName = content.lastName;
  let department = content.department;
});

module.exports = router;
