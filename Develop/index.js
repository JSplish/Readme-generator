const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');


const questions = () => {
  return inquirer.prompt([
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
      message: 'Provide a screen share link to display the usage of the application (Required)',
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
      validate: emailInput => { 
        if (emailInput) { 
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
      choices: ['Apache', 'MIT', 'Mozilla-Public', 'GNU-General-Public', 'IBM', 'None']
    }
  
  ])};


const writeToFile = data => {
  fs.writeFile('README.md', data, error => {
    if (error) {
      console.log(error);
      return; 
    } else {
      console.log("README had been generated successfully")
    }
  })
};


async function init() {
  const feedback = await questions();
  const markdown = generateMarkdown(feedback);
  writeToFile(markdown);
};

// Function call to initialize app
init();
