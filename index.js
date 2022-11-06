// import npm packages

const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');

// Class import
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// Import HTML template
const templateHTML = require('./public/index.html');

// Empty array for team members
const teamMembers = [];


//function to add team members

function addTeamMember() {
    inquirer.createPromptModule([
        {
            type: 'list',
            name: 'teamList',
            message: 'Add an engineer, Add an intern or finish assembling your team?',
            choices: ['Engineer', 'Intern', 'Assemble Team!'],

        },
    ])
    .then((val) => {
        if (val.teamList === 'Engineer') {
            addEngineer()
        } else if (val.teamList === 'Intern') {
            addIntern()
        }else {
            assembleTeam()
        }
    })
}


// Get manager data inputs to start application

function addManager() {
    inquirer.createPromptModule([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the team manager?',
        },
        {
            type: 'input',
            name: 'id',
            message: 'Employee ID of the team manager?',
        },
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the team manager?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the email address of the team manager?',
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is the office number of the team manager?',
        },
    ])
    .then((val) => {
        const manager = new Manager(val.name, val.id, val.email, val.officeNumber)
        console.table(manager);
        teamMembers.push(manager);
        addTeamMember();
    })
}







// start of the application prompt for team managers name, employee id, email, and office number
// then menu with option ot add engineer, intern, or to finish building my team
// then engineer's name, id, email, and githu usersname, and taken back to menu
// then prompted to enter the interns name, id, email, and school, takend back to menut
// when I decide to finish building my team, then I exit the application, an html is generated