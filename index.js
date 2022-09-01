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
    .then(({name, id, email, officeNumber}) => {
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
            choices: ['Engineer', 'Intern', 'Done']
        }
])
.then (({role}) => {
    if (role === 'Engineer'){
        engineerProfile();
    } else if (role === 'Intern') {
        internProfile();
    }else{
        const fileData = generateHTML(teamArr);
        writeFile(fileData, teamArr);
    }
})

};

function engineerProfile() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the engineers name?',
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
            message: 'What is the engineers id?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the engineers email address?'
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is the engineers GitHub username?'
        }
    ])
    .then(({name, id, email, github}) => {
        this.Engineer = new Engineer(name, id, email, github);
        teamArr.push(this.Engineer)
        addEmployee();

    })
};

function internProfile (){
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the interns name?',
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
            message: 'What is the interns id?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the interns email address?'
        },
        {
            type: 'input',
            name: 'school',
            message: 'What school does the intern go to?'
        }
    ])
    .then(({name, id, email, school}) => {
        this.Intern = new Intern(name, id, email, school);
        teamArr.push(this.Intern)
        addEmployee();

    })
};

function writeFile(filedata, teamArr){
    fs.writeFile('./dist/index.html', filedata, (err) => {
        if (err) {
            console.log(err);
            return;
        }else {
            console.log("Team profile has been created")
        }
    })
};



init();