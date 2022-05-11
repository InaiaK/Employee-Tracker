const express = require('express')
const mysql = require('mysql2')

const PORT = process.env.PORT || 3000;
const app= express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


// Connect to mySQL
db.connect(err => {
    if (err) {
        throw err
    } console.log('mySQL connected')
})


const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123942'
},
console.log('Connected to the employeetracker_db database.')
);


//Create DB
app.get('/createdb', (req, res) => {
    let sql = 'CREATE DATABASE employeetracker';
    db.query(sql, (err) => {
        if (err) {
            throw err;
        }
        res.send('DATABASE created');
    });
});

app.listen('3000', () => {
    console.log('Server on port 3000')
})


// inquirer prompt for first action
const promptUser = () => {
    inquirer.prompt ([
      {
        type: 'list',
        name: 'choices', 
        message: 'What would you like to do?',
        choices: ['View all departments', 
                  'View all roles', 
                  'View all employees', 
                  'Add a department', 
                  'Add a role', 
                  'Add an employee', 
                  'Update an employee role',
                  'Update an employee manager',
                  "View employees by department",
                  'Delete a department',
                  'Delete a role',
                  'Delete an employee',
                  'View department budgets',
                  'No Action']
      }
    ])
      .then((answers) => {
        const { choices } = answers; 
  
        if (choices === "View all departments") {
          showDepartments();
        }
  
        if (choices === "View all roles") {
          showRoles();
        }
  
        if (choices === "View all employees") {
          showEmployees();
        }
  
        if (choices === "Add a department") {
          addDepartment();
        }
  
        if (choices === "Add a role") {
          addRole();
        }
  
        if (choices === "Add an employee") {
          addEmployee();
        }
  
        if (choices === "Update an employee role") {
          updateEmployee();
        }
  
        if (choices === "Update an employee manager") {
          updateManager();
        }
  
        if (choices === "View employees by department") {
          employeeDepartment();
        }
  
        if (choices === "Delete a department") {
          deleteDepartment();
        }
  
        if (choices === "Delete a role") {
          deleteRole();
        }
  
        if (choices === "Delete an employee") {
          deleteEmployee();
        }
  
        if (choices === "View department budgets") {
          viewBudget();
        }
  
        if (choices === "No Action") {
          connection.end()
      };
    });
  };
  

