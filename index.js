const inquirer = require('inquirer');

const fs = require('fs'); 

const Manager = require('./lib/Manager');
const Engineer = require ('./lib/Engineer');
const Interin = require('./lib/Interin');

const employees = [];

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
      <p> ${response.phone}</p>
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



// GIVEN a command-line application that accepts user input
// WHEN I am prompted for my team members and their information
// THEN an HTML file is generated that displays a nicely formatted team roster based on user input
// WHEN I click on an email address in the HTML
// THEN my default email program opens and populates the TO field of the email with the address
// WHEN I click on the GitHub username
// THEN that GitHub profile opens in a new tab
// WHEN I start the application
// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
// WHEN I enter the team manager’s name, employee ID, email address, and office number
// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated