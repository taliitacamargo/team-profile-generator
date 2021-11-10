// const Html = require('./html src/newhtml');
const inquirer = require('inquirer');


const fs = require('fs'); 


const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require ('./lib/Engineer');
const Interin = require('./lib/Intern');

const employees = [];

function createManager() {
inquirer.prompt([
    {
    type: "input",
    name: "managerName",
    messsage: "What is the member's name?"
    },
    {
    type: "input",
    name: "managerId",
    message: "What is the member's employee ID?" 
    },
    {
        type: "input",
        name: "managerEmail",
        message: "What is the member's email address?"  
    },
    {
        type: "input",
        name: "managerOffice",
        message: "What is the member's office number?"  
    },
])
.then((response) => {
    const manager = new Manager(
        response.managerName, 
        response.managerId,
        response.managerEmail, 
        response.managerOffice
    )
    employees.push(manager);
})


}

function addToTeam() {
    inquirer.prompt([{
        type: "list",
        name: "role",
        message: "What is the member's role?",  
        choices: ["Engineer", "Intern"]

    }])
    .then((chosenRole) => {
        switch (chosenRole.role) {
            case 'Engineer': 
                addEngineer()
                break;

                case 'Intern': 
                addIntern()
                break;
        
            default:
                break;
        }
    })
}

function addEngineer() {
    nquirer.prompt([
        {
        type: "input",
        name: "engineerName",
        messsage: "What is the member's name?"
        },
        {
        type: "input",
        name: "engineerId",
        message: "What is the member's employee ID?" 
        },
        {
            type: "input",
            name: "engineerEmail",
            message: "What is the member's email address?"  
        },
        {
            type: "input",
            name: "engineerGitHub",
            message: "What is the member's GitHub?"  
        },
    ])
    .then((response) => {
        const engineer = new Engineer(
            response.engineerName, 
            response.engineerId,
            response.engineerEmail, 
            response.engineerGitHub
        )
        employees.push(engineer);
    })

// similar to manager function 
}

function addIntern() {
// 
}



const newMember = [{
    type: "input",
    name: "name",
    messsage: "What is the member's name?"
},
{
    type: "input",
    name: "id",
    message: "What is the member's employee ID?"  
},
{
    type: "input",
    name: "email",
    message: "What is the member's email address?"  
},
{
    type: "input",
    name: "office",
    message: "What is the member's office number?"  
},
{
    type: "list",
    name: "role",
    message: "What is the member's role?",  
    choices: ["Manager", "Engineer", "Intern"]
}
];


    // inquirer.prompt(newMember).then((response) => {
    //     writeToFile("team.html");

inquirer.prompt(newMember).then((response) => {
    const content = `
  <!DOCTYPE html>
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
      <h1>${response.name}</h1>
      <article>
      <nav>
      <ol>
      <li>
      <p> ${response.id}</p>
      </li>
      <li>
      <p> ${response.email}</p>
      </li>
      <li>
      <p> ${response.office}</p>
      </li>
      </ol>
      </nav>
      </section>
  </body>
  </html>
  `

fs.writeFile("employee.html", content, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    });
});
