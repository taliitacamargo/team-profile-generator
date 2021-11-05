const inquirer = require('inquirer');
const fs = require('fs'); 

const employees = [];

const newMember = [{
    name: "name",
    messsage: "What is the member's name?"
},
{
    name: "id",
    message: "What is the member's employee ID?"  
},
{
    name: "email",
    message: "What is the member's email address?"  
},
{
    name: "phone",
    message: "What is the member's phone number?"  
},
{
    name: "role",
    message: "What is the member's role?",  
    choices: ["Manager", "Engineer", "Interin"]
},

];