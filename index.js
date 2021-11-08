const inquirer = require('inquirer');
const fs = require('fs'); 
const Manager = require('./lib/Manager');
const Engineer = require ('./lib/Engineer');
const Interin = require('./lib/Interin');

const employees = [];

class Manager extends employee {

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
    name: "phone",
    message: "What is the member's phone number?"  
},
{
    type: "list",
    name: "role",
    message: "What is the member's role?",  
    choices: ["Manager", "Engineer", "Interin"]
},

];

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
      <p> ${response.phone}</p>
      </li>
      </ol>
      </nav>
      </section>
  </body>
  </html>
  `;

  
    fs.writeFile("employee.html", content, (err) => {
      if (err) {
        console.error(err);
        return;
      }
    });
  });
  