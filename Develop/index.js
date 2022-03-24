// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input',
      name: 'name',
      message: 'What is the name of your GitHub repo? (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Enter GitHub repo please.');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'github',
      message: 'What is your github username?(Required)',
      validate: githubInput => {
        if (githubInput) {
          return true;
        } else {
          console.log('A valid github username is required');
          return false;
        }
      }
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is the link to you GitHub profile (Required)',
        validate: linkInput => {
          if (linkInput) {
            return true;
          } else {
            console.log('Please provide the correct link');
            return false;
          }
        }
      },
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project? (Required)',
      validate: titleInput => {
        if (titleInput) {
          return true;
        } else {
          console.log('A valid title for the project is required');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'info',
      message: 'Enter important information about your project (Required)',
      validate: infoInput => {
        if (infoInput) {
          return true;
        } else {
          console.log('Enter a description about your project');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Enter the installation instructions to your project (Required)',
      validate: installInput => {
        if (installInput) {
          return true;
        } else {
          console.log('Enter installation instructions for your project');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Provide a screenshare link to display the usage of the application (Required)',
      validate: usageInput => {
        if (usageInput) {
          return true;
        } else {
          console.log('A valid link for the usage of the application is required');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'contribution',
      message: 'Who contributed to the creation of the project? (Required)',
      validate: contributeInput => {
        if (contributeInput) {
          return true;
        } else {
          console.log('List the contributors to the project');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address? (Required)',
      validate: nameInput => { //emailInput??
        if (nameInput) { //emailInput??
          return true;
        } else {
          console.log('Please enter your email.');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'testing',
      message: "If applicable, provide any tests written for your application and provide examples on how to run them."
  },
    {
      type: 'checkbox',
      name: 'licensing',
      message: 'Select the following licenses used for the project (Multiple options may be selected)',
      choices: ['Apache', 'MIT', 'Mozilla-Public', 'GNU-General-Public', 'Common-Development-and Distribution', 'None'],
    }
  ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
