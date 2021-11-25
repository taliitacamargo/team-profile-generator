
function createTeamCards(employeeCards) {


  const addManager = function (manager) {
    return ` 

    <div class="card-deck text-white d-flex justify-content-center  text-center" style="max-width: 50rem;">
  <div class="card  bg-dark m-3 border-warning">
    <div class="card-body ">
      <h4 class="card-title">Manager</h4>
      <h6 class="card-text">${manager.name}</h6>
      <p>${manager.id}</p>
      <p> ${manager.email}</p>
      <p> ${manager.office}</p>
    </div>
  </div>
\
  `;
  }

  const addEngineer = function (engineer) {
    return `
  <div class="card  bg-dark m-3 border-warning">
    <div class="card-body">
      <h4 class="card-title">Engineer</h4>
      <h6 class="card-text">${engineer.name}</h6>
      <p>${engineer.id}</p>
      <p> ${engineer.email}</p>
      <p> ${engineer.github}</p>
    </div>
  </div>
    `;
  }

  const addIntern = function (intern) {
    return `
    <div class="card  bg-dark  m-3 border-warning">
      <div class="card-body">
        <h4 class="card-title">Intern</h4>
        <h6 class="card-text">${intern.name}</h6>
        <p>${intern.id}</p>
        <p> ${intern.email}</p>
        <p> ${intern.school}</p>
      </div>
    </div>
    </div>
    `;
  }

  const cards = [];


  cards.push(employeeCards
    .filter(employeeCard => employeeCard.getRole() === "Manager")
    .map(manager => addManager(manager))
  )
  cards.push(employeeCards
    .filter(employeeCard => employeeCard.getRole() === "Engineer")
    .map(engineer => addEngineer(engineer))
  )
  cards.push(employeeCards
    .filter(employeeCard => employeeCard.getRole() === "Intern")
    .map(intern => addIntern(intern))
  )

return cards.join('')
}
module.exports = employeeCards => {
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
      <title>Team Profile Generator</title>
  </head>

  <body>
  <header> 
  <h1 class= "text-center text-light bg-dark"> My Team </h1>
  <section class= "container">
      ${createTeamCards(employeeCards)}
  </section>
  </body>
  </html>
  `;
}
