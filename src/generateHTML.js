// Creates HTML cards for each team member from data inputs

const createTeam = (team) => {

    const createManager = (manager) => {
      return  `
        <div class="card col-3 me-3 mb-5 employee-card">
        <div class="card-header employee-header">
            <h2 class="card-title">${manager.name}</h2>
            <h3 class="card-title"><i class="fa-solid fa-people-roof"></i> ${manager.getRole()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${manager.id}</li>
                <li class="list-group-item">
                    Email: <a href="mailto:${manager.email}">${manager.email}</a>
                </li>
                <li class="list-group-item">Office number: ${manager.officeNumber}</li>
            </ul>
        </div>
    </div>
    `;
}
    const createEngineer = (engineer) => {
       return `
        <div class="card col-3 me-3 mb-5 employee-card">
        <div class="card-header employee-header">
            <h2 class="card-title">${engineer.name}</h2>
            <h3 class="card-title"><i class="fa-solid fa-wrench"></i> ${engineer.getRole()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${engineer.id}</li>
                <li class="list-group-item">
                    Email: <a href="mailto:${engineer.email}">${engineer.email}</a>
                </li>
                <li class="list-group-item">
                    GitHub:
                    <a href="https://github.com/${engineer.github}" target="_blank"
                        rel="noopener noreferrer">${engineer.github}</a>
                </li>
            </ul>
        </div>
    </div>
    `;
}
    const createIntern = (intern) => {
      return `
    <div class="card col-3 me-3 mb-5 employee-card">
        <div class="card-header employee-header">
            <h2 class="card-title">${intern.name}</h2>
            <h3 class="card-title"><i class="fa-solid fa-wrench"></i> ${intern.getRole()}</h3>
    </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${intern.id}</li>
                <li class="list-group-item">
                    Email: <a href="mailto:${intern.email}">${intern.email}</a>
                </li>
                <li class="list-group-item">School: ${intern.school}</li>
            </ul>
        </div>
    </div>
    `;
}

// Create an empty array for HTML cards
const htmlCards = [];

// Adds the HTML cards to array
htmlCards.push(team
    .filter(employee => employee.getRole() === "Manager")
    .map(manager => createManager(manager))
);

htmlCards.push(team
    .filter(employee => employee.getRole() === "Engineer")
    .map(engineer => createEngineer(engineer))
    .join('')
);

htmlCards.push(team
    .filter(employee => employee.getRole() === "Intern")
    .map(intern => createIntern(intern))
    .join('')
);

return htmlCards.join('');
};
 

// Base team boilerplate HTML

// Creates team HTML

const generateHTMl = (team) => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profiles</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
    <link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css">
    <link rel="stylesheet" href="./public/style.css">
</head>

<body>
    <div class="container-fluid">
        <div class="row">
            <div class="team-profile-header col-12 mb-3 team-profile jumbotron">
                <h1 class="team-profile-title text-center">Meet The Team</h1>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="team-mem-container col-12 d-flex flex-wrap justify-content-around">
                ${createTeam(team)}
            </div>
        </div>
    </div>
</body>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3"
        crossorigin="anonymous"></script>
</html>
`

export default generateHTMl