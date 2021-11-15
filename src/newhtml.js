
function createTeamCards(employeeCards) {


  const addManager = function (manager) {
    return ` 
  <section class= "container">
      <h1>${manager.managerName}</h1>
      <article>
      <nav>
      <ol>
      <li>
      <p> ${manager.managerId}</p>
      </li>
      <li>
      <p> ${manager.managerEmail}</p>
      </li>
      <li>
      <p> ${manager.managerOffice}</p>
      </li>
      </ol>
      </nav>
      </section>
  `;
  }

  const addEngineer = function (engineer) {
    return `
    <section class= "container">
    <h1>${engineer.engineerName}</h1>
    <article>
    <nav>
    <ol>
    <li>
    <p> ${engineer.engineerId}</p>
    </li>
    <li>
    <p> ${engineer.engineerEmail}</p>
    </li>
    <li>
    <p> ${engineer.engineerGitHub}</p>
    </li>
    </ol>
    </nav>
    </section>
    `;
  }

  const addIntern = function (intern) {
    return `
    <section class= "container">
    <h1>${intern.internName}</h1>
    <article>
    <nav>
    <ol>
    <li>
    <p> ${intern.internId}</p>
    </li>
    <li>
    <p> ${intern.internEmail}</p>
    </li>
    <li>
    <p> ${intern.internSchool}</p>
    </li>
    </ol>
    </nav>
    </section>
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
  `' <!DOCTYPE html>
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
