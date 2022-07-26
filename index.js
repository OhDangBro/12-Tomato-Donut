const inquirer = require('inquirer');
const express = require('express');
const fs = require('fs');
const path = require('path');
const mysql = require('mysql2');
const app = express();
app.use(express.json());
var profileDataArgs = process.argv.slice(10, process.argv.length);
var commandLineArgs = process.argv;
const db = mysql.createConnection(
  {
    host: 'localhost',
    // Your MySQL username,
    user: 'root',
    // Your MySQL password
    password: 'Jessie17',
    database: 'company',
    multipleStatements: true
  },

  console.log('Connected to the election database.')
);


function startProgram() {
  inquirer
    .prompt([
      {
        type: 'list',
        message: 'What would You Like To Do?',
        name: 'Options',
        choices: ['View All Departments', 'Add Department', 'Add Role',  'View All Roles', 'View All Employees','Add Employee', 'Update Employee Roles', 'QUIT'],
      }])
    .then((answers) => {
      const { Options } = answers

      if (Options === "View All Departments") {
        ViewDepartment();
      }
      if (Options === "Add Department") {
        addDepartment();
      }
      if (Options === 'View All Roles') {
        viewRoles();

      }
      if (Options === 'Add Role') {
        addRole();

      }
      if (Options === 'View All Employees') {
        viewEmployees();

      }
      if (Options === 'Add Employee') {
        addEmployee();

      }
      if (Options === 'Update Employee Roles') {
        updateRole();

      }
      if (Options === 'QUIT') {
        quitFunction();

      }
      
    });
};


/// Function for viewing department
function ViewDepartment() {
  db.query('SELECT * FROM department', function (err, results) {
    console.log(results);
  });
};

///Function to add department START ///////
addDepartment = () => {
  inquirer.prompt([
    {
      type: 'input',
      name: 'departmentAdd',
      message: 'What department would you like to add?',
      validate: departmentAdd => {
        if (departmentAdd) {
          return true;
        }else {
          console.log("Please input a department name you would like to add!")
          return false;
        }
        
      }
    }
  ])
.then(answer => {
  db.query(`INSERT INTO department(name)
  VALUES ('${answer.departmentAdd}');` )
  ViewDepartment();
  });
};
//// Function to add department END //////

/// Function for adding role
function ViewDepartment() {
  db.query('SELECT * FROM department', function (err, results) {
    console.log(results);
  })
};

////// Function for view roles/////
function viewRoles() {
  db.query('SELECT * FROM roles', function (err, results) {
    console.log(results);
  })
};

////// FUNCTION FOR VIEW ALL EMPLOYEES//////
function viewEmployees() {
  db.query('SELECT * FROM employee', function (err, results) {
    console.log(results);
  })
};

// function to add an employee 
addEmployee = () => {
  inquirer.prompt([
    {
      type: 'input',
      name: 'addEmployeeFirstName',
      message: "What is the employee's first name?",
      validate: addFirst => {
        if (addFirst) {
            return true;
        } else {
            console.log('Please enter a first name');
            return false;
        }
      }
    },
    {
      type: 'input',
      name: 'addEmployeeLastName',
      message: "What is the employee's last name?",
      validate: addLast => {
        if (addLast) {
            return true;
        } else {
            console.log('Please enter a last name');
            return false;
        }
      }
    },
    {
      type: 'list',
      name: 'addEmployeeRoleId',
      message: "What is the employee's role?",
      choices: ['DOG GROOMER', 'CAT WALKER', 'BIRD WALKER'],
      validate: addEmRoleId => {
        if (addEmRoleId) {
            return true;
        } else {
            console.log('Please enter a role ID');
            return false;
        }
      }
      
      
    },

    {
      type: 'list',
      name: 'addEmployeeManagerId',
      message: "Which manager will be overseeing this employee?",
      choices: ['Sam Samuels', 'Mike Michaels', 'Rob Roberts'],
      validate: addEmployeeManagerId => {
        if (addEmployeeManagerId) {
            return true;
        } else {
            console.log('Please enter a last name');
            return false;
        }
      }
      
    },
  ])
  .then(answer => {
    db.query(`INSERT INTO employee (first_name, last_name, role_id, manager_id)
    VALUES ('${answer.addEmployeeFirstName}'), ${answer.addEmployeeLastName}, ${answer.addEmployeeRoleId}, ${answer.addEmployeeManagerId};` )
    
    });
  };

  ////// UPDATE ROLE FUNCTION //////
  updateRole = () => {
    inquirer.prompt([
      {
        type: 'input',
        name: 'changeRoleForName',
        message: "What is the employee's first name who's roll you would like to change??",
        validate: changeRoleName => {
          if (changeRoleName) {
              return true;
          } else {
              console.log('Please enter a first name for an employees role you would like to change!');
              return false;
          }
        }
      },
      {
        type: 'input',
        name: 'changeRoleLastName',
        message: "What is the last name of the employee who's roll you would like to change?",
        validate: changeRoleLastN => {
          if (changeRoleLastN) {
              return true;
          } else {
              console.log('Please enter the roll number of the employee you would like to change!');
              return false;
          }
        }
      },
      {
        type: 'input',
        name: 'changeRoleTo',
        message: "What role would you like to change the employee to, please select by number.",
        validate: changeRole2 => {
          if (changeRole2) {
              return true;
          } else {
              console.log('Please input the employees new role ID');
              return false;
          }
        }
        
      },
    ])
    .then(answer => {
      db.query(`UPDATE employee
      SET role_id = ${answer.changeRole2},
      WHERE first_name, last_name = ${answer.changeRoleForName}, ('${answer.changeRoleLastName}'), ;` )
      
      }); 
    
    
  };

    
////// QUIT FUNCTION
function quitFunction() {
  db.query('exit', function (err, results) {
    console.log('Goodbye!');
  })
};



startProgram();

  // export PATH=${PATH}:/usr/local/mysql/bin* 
  