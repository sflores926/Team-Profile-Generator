// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// const generateReadMe = require('./utils/generateMarkdown');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
// const questions = [];
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            messsage: 'What is your project Title?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a short description explaining the what, why, and how of your project?',
        },
        {
            type: 'input',
            name: 'table of contents',
            message: 'If your README is long add a table of contents to make it easier for a user to find what they need.',
        },
        {
            type:'input',
            name: 'installation',
            message: 'What are the steps required to install your project?',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide instructions and examples for use. Include screenshots as needed',
        },
        {
            type: 'list',
            name: 'license',
            message: 'Choose an open source license?',
            choices: ['MIT', 'GNU'],
            default: ['MIT'],
        },
        {
            type: 'input',
            name: 'contribute',
            message: 'If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so.',
        },
        {
            type: 'input',
            name: 'test',
            message: 'How do you run your application?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Provide an email address for someone to be able to contact you?',
        },
        {
            type: 'input',
            name: 'github',
            message:'Provide you github username?',
        }
    ]);
};


// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
// function init() {}
const init = () => {
    questions()
      // Use writeFileSync method to use promises instead of a callback function
      .then((answers) => fs.writeFileSync('README.md', generateMarkdown(answers)))
      .then(() => console.log('Successfully wrote to README.md'))
      .catch((err) => console.error(err));
  };

// Function call to initialize app
init();
