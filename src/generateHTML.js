// to generate html for cards
const generateHTML = teamProfiles => {
    return `
    <!DOCTYPE html>
<html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile Generator</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
        <script src="https://kit.fontawesome.com/164afc97fd.js" crossorigin="anonymous"></script>
    </head>

    <body>
   
        <div class="container-fluid bg-info">
            <div class="row">
                <div class="col-12 jumbotron mb-3 team-heading">
                    <h1 class="text-center">My Team Profiles</h1>
                </div>
            </div>
        </div>
   
        <div class="container col-12 p-3">
            <div class="row d-flex justify-content-center">
            
                 ${teamProfiles}



            </div>
        
        </div>
    </body>
    
</html>
`
}

// Creating an array get cards to page 
const generateTeamPage = team => {
    const teamCards = [];
// console.log(team)
    for (let i = 0; team.length > i; i++) {
        const teamProf = team[i]
        const teamRole = teamProf.getRole();
console.log("role", teamRole)
        if (teamRole === 'Manager') {
            const manager = managerProfile(teamProf);
            teamCards.push(manager);
        }

        if (teamRole === 'Engineer') {
            const engineer = engineerProfile(teamProf);
            teamCards.push(engineer);
        }

        if (teamRole === 'Intern') {
            const intern = internProfile(teamProf);
            teamCards.push(intern);
        }
    }
    const teamProfiles = teamCards.join('');
    return generateHTML(teamProfiles);

}

//generates manager profile
const managerProfile = manager => {
    return `
    <div class="card col-3 m-3">
        <div class="card-header">
            <h2>${manager.name}</h2>
            <h3><i class="fa-solid fa-mug-hot mr-2"></i>Manager</h3>
        </div>
        <div class="card-body bg-secondary">
            <ul class="list-group">
                <li class="list-group-item">ID: ${manager.id}</li>
                <li class="list-group-item">Email: <a
                    href="malito:${manager.email}">${manager.email}</a></li>
                <li class="list-group-item">Office number: ${manager.officeNumber} </li>
            </ul>
        </div>
    </div>
    `
};

//generates engineer profile
const engineerProfile = engineer => {
    return `
    <div class="card col-3 m-3">
        <div class="card-header">
            <h2>${engineer.name}</h2>
            <h3><i class="fa-solid fa-glasses"></i>Engineer</h3>
        </div>
        <div class="card-body bg-secondary">
            <ul class="list-group">
                <li class="list-group-item">ID: ${engineer.id}</li>
                <li class="list-group-item">Email: <a
                    href="malito:${engineer.email}">${engineer.email}</a></li>
                <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.github}">${engineer.github}</a>
                </li>
            </ul>
        </div>
    </div>
    `
};

//generates intern profile
const internProfile = intern => {
    return `
    <div class="card col-3 m-3">
         <div class="card-header">
            <h2 class="card-title">${intern.name}</h2>
            <h3 class="card-title"><i class="fa-solid fa-user-graduate"></i></i>Intern</h3>
        </div>
        <div class="card-body bg-secondary">
            <ul class="list-group">
                <li class="list-group-item">ID: ${intern.id}</li>
                <li class="list-group-item">Email: <a
                href="malito:${intern.email}">${intern.email}</a></li>
                <li class="list-group-item">School: ${intern.school}</li>
            </ul>
         </div>
    </div>
 `
};

module.exports = generateTeamPage;


