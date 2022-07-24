const inquirer = require('inquirer');
console.log("readme working");
const fs = require('fs');
const path = require('path');
var profileDataArgs = process.argv.slice(10, process.argv.length);
var commandLineArgs = process.argv;
function startProgram() {
inquirer
    .prompt([
        {
            type: 'rawlist',
            message: 'What would You Like To Do?',
            name: 'Options',
            choices: ['Add Department', 'Add Role', 'Add Employee', 'View All Departments', 'View All Roles', 'View all Employees', 'Update Employee Roles', 'QUIT'],
            validateResponse() {
            if ('Add Department') {

             }
          else if ('Add Role') {
              
          }
          else if ('Add Employee') {
              console.log('GeneralPublicLicense');
          }
          else if ('View All Departments') {
            console.log('GeneralPublicLicense');
        }
        else if ('View All Roles') {
            console.log('GeneralPublicLicense');
        }
        else if ('View All Employees') {
            console.log('GeneralPublicLicense');
        }
        else if ('Update Employee Roles') {
            console.log('GeneralPublicLicense');
        }
        
          else { ////QUIT////
              console.log('QUIT');
          }
          
        }
        
        
        },
       
    ])};
    
      

  
  

  startProgram();