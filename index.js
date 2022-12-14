// import npm packages
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
// const url = require('url');

// Class import
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');

// Output path
// const __filename = url.fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
const DIST_DIR = path.resolve(__dirname, 'dist')
const outputPath = path.join(DIST_DIR, 'teamMembers.html')


// Import HTML template
const templateHTML = require('./src/generateHTML.js');

// Empty array for team members
const teamMembers = [];


//function to add team members

function addTeamMember() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'teamList',
            message: 'Add an engineer, Add an intern or finish assembling your team?',
            choices: ['Engineer', 'Intern', 'Create Team!'],

        },
    ])
        .then((data) => {
            if (data.teamList === 'Engineer') {
                addEngineer()
            } else if (data.teamList === 'Intern') {
                addIntern()
            } else {
                assembleTeam()
            }
        })
}


// Get manager data inputs

function addManager() {
    inquirer.prompt([
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
            name: 'email',
            message: 'What is the email address of the team manager?',
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is the office number of the team manager?',
        },
    ])
        .then((data) => {
            const manager = new Manager(data.name, data.id, data.email, data.officeNumber)
            console.table(manager);
            teamMembers.push(manager);
            addTeamMember();
            assembleTeam();
        })
}


function assembleTeam() {
    if (!fs.existsSync(DIST_DIR)) {
        fs.mkdirSync(DIST_DIR);
    } else {
        fs.writeFileSync(outputPath, templateHTML(teamMembers), 'utf-8');
        console.log('HTML file created in the dist folder!');
    }
}

// get engineer data inputs

function addEngineer() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the engineers name?',
        },
        {
            type: 'input',
            name: 'id',
            message: `What is the engineer's employee ID?`,
        },
        {
            type: 'input',
            name: 'email',
            message: `What is the engineers's email address`,
        },
        {
            type: 'input',
            name: 'github',
            message: `What is the engineer's Github profile name?`,
        },
    ])
        .then((data) => {
            const engineer = new Engineer(data.name, data.id, data.email, data.github)
            console.table(engineer);
            teamMembers.push(engineer);
            addTeamMember();
        })
}

// get Intern data inputs

function addIntern() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: `What is the interns name?`,
        },
        {
            type: 'input',
            name: 'id',
            message: `What is the interns employee ID?`,
        },
        {
            type: 'input',
            name: 'email',
            message: `What is the interns email address?`,
        },
        {
            type: 'input',
            name: 'school',
            message: `What school does(did) the intern attend?`,
        },
    ])
        .then((data) => {
            const intern = new Intern(data.name, data.id, data.email, data.school);
            console.table(intern);
            teamMembers.push(intern);
            addTeamMember()
        });
}

//start app

function startApp() {
    addManager()
}

startApp()