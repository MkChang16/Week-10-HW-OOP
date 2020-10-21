const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const employeeQuestions = [
    {
        type:"list",
        name: "role",
        choices: [
            'Engineer',
            'Intern',
            'Manager',
        ]
    }
]
function menu(){
inquirer.prompt(employeeQuestions).then(employeeAnswers =>{
    console.log(employeeAnswers)
    if (employeeAnswers.role === 'Engineer'){
        console.log('Engineer role chosen', employeeAnswers.role)
        engineerMenu()
    } 
    else if (employeeAnswers.role === 'Intern'){
        console.log('Intern role chosen', employeeAnswers.role)
    }
    else if (employeeAnswers.role === 'Manager'){
        console.log('Manager role chosen', employeeAnswers.role)
    }
})
}

const engineerQuestions = [
    {
        type: "input",
        name: "name",
        message: "What is the employee's name?",
    },
]

function engineerMenu(){
    inquirer.prompt(engineerQuestions).then(engineerAnswers =>{
        console.log('This are the engineer answers', engineerAnswers)
        let eng = new Engineer(engineerAnswers.name, '5', '0', '0')
        teamArray.push(eng)
        //menu
    })
}

let teamArray = []


// const internQuestions;
// const managerQuestions;

function writeToFile(fileName, teamArray) {
    return fs.writeFileSync(fileName, render(teamArray))
}

menu()
const render = require("./lib/htmlRenderer");


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
