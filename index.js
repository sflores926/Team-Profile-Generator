const inquirer = require("inquirer");
const fs = require ("fs");

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const generateHTML = require('./src/generateHTML');

//empty array for team profiles
const teamArr = [];

function init(){
    managerProfile();
}

function managerProfile () {
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
            message: 'What is the team managers email address?'
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is the team managers office number?'
        }
    ])
    .then(({name, id, emaill, officeNumber}) => {
        this.Manager = new Manager(name, id, email, officeNumber);
        teamArr.push(this.Manager)
        // console.log(manager);
        addEmployee();

    })

};




function addEmployee(){
    inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: 'Please choose an employees role?',
            choices: ['Engineer', 'intern', 'Done']
        }
])

}



init();