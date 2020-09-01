const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generate = require("./utils/generateMarkdown");
const Choices = require("inquirer/lib/objects/choices");

const writeFileAsync = util.promisify(fs.writeFile);

// array of questions for user
const questions = [
    {
        type: "input",
        name: "GitHub",
        message: "What is your GitHub username?"
      },
      {
        type: "input",
        name: "Email",
        message: "What is your email?"
      },
      {
        type: "input",
        name: "URL",
        message: "What is URL to your project?"
      },
      {
        type: "input",
        name: "Title",
        message: "What is the name of your project?"
      },
      {
        type: "input",
        name: "Description",
        message: "Provide a short description of your project"
      },
      {
        type: "list",
        name: "Licenses",
        message: "What kind of license should your project have?",
        choices: ["MIT", "Apache", "Mozilla","Perl"]
      },
      {
        type: "input",
        name: "Dependencies",
        message: "What command should be run to install dependencies?"
      },
      {
        type: "input",
        name: "Tests",
        message: "What command should be run to run tests?"
      },
      {
        type: "input",
        name: "Using",
        message: "What does the user need to know about using the repo?"
      },
      {
        type: "input",
        name: "Contributing",
        message: "What does the user need to know about contributing to the repo?"
      },
      
      
];

// function to write README file
function writeToFile(fileName, data) {
    return writeFileAsync(fileName, data)
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then(answers => {
        console.log(answers);
        writeToFile("README.md", generate(answers))
    });

};  

// function call to initialize program
init();
