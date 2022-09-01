const inquirer = require("inquirer");
const fs = require ("fs");

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const generateHTML = require('./src/generateHTML');

//empty array for team profiles
const teamArr = [];

function manager() {
    inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'What is the team managers name?',
            validate: nameInput => {
                if(nameInput){
                    return true;
                } else {
                    console.log ('Please enter the managers name');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the team managers id?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the team managers email address?',
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is the team managers office number?'
        }
    ])

}
