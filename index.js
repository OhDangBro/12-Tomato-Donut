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
            choices: ['Add Department', 'Add Role', 'Add Employee', 'Add Employee' ],
            validateResponse() {
            if ('Add Department') {   
            //     prompt([{
            //         type: 'input',
            // message: 'What is the name of the department?',
            // name: 'department',
            // validate: departmentInput => {
            //     if (departmentInput) {
            //       return true;
            //     } else {
            //       console.log('You need to enter a department name!');
            //       return false;
            //     }
            //   }

            //     }]);
  
          }
          else if ('Add Role') {
              console.log("You are probably well informed");
          }
          else if ('Add Employee') {
              console.log('GeneralPublicLicense');
          }
          else {
              console.log('Add Employee');
          }
          
        }
        
        
        },
    ])};
    
      

  
  

  startProgram();