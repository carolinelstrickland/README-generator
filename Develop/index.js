const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generate = require("./utils/generateMarkdown");

const writeFileAsync = util.promisify(fs.writeFile);

// array of questions for user
const questions = [
    {
        type: "input",
        name: "name",
        message: "What is your name?"
      },
      {
        type: "input",
        name: "location",
        message: "Where are you from?"
      },
      {
        type: "input",
        name: "hobby",
        message: "What is your favorite hobby?"
      },
      {
        type: "input",
        name: "food",
        message: "What is your favorite food?"
      },
      {
        type: "input",
        name: "github",
        message: "Enter your GitHub Username"
      },
      {
        type: "input",
        name: "linkedin",
        message: "Enter your LinkedIn URL."
      }
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
