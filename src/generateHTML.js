// to generate html for cards
const generateHTML = teamProfiles => {
    return`
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

    for (let i = 0; team.length > i; i++) {
        const teamProf = team[i]
        const teamRole = teamProf.role;

        if (teamRole === 'Manager') {
            const manager = manageCard(teamCards);
            teamCards.push(manager);
        }

        if (teamRole === 'Engineer') {
            const engineer = engineerCard(teamCards);
            teamCards.push(engineer);
        }

        if (teamRole === 'Intern') {
            const intern = internCard(teamCards);
            teamCards.push(intern);
        }
    }
    const teamProfileCards = teamCards.join('');
    return generateHTML(teamProfiles);

}




