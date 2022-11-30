// pulls in js files from lib folder
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

// pulls in files to create html
const generateManagerHTML = require("./utils/manager_HTML");
const generateEngineerHTML = require("./utils/engineer_HTML");
const generateInternHTML = require("./utils/intern_HTML");
const generateHeaderHTML = require("./utils/header_HTML");
const generateFooterHTML = require("./utils/footer_HTML");
const inquirer = require("inquirer");

const fs = require("fs");
const { Z_FIXED } = require("zlib");
// TODO: Create an array of questions for user input

//arrays to build for each employee
//manager
var managerArr = [];
//engineer array
var engineerArr = [];
//intern
var internArr = [];

let htmlString = "";
let headerString = "";

// prompt from manager and option to choose addional employees and to get out
inquirer
  //manager input
  .prompt([
    {
      type: "input",
      message: "Manager's Name?",
      name: "managersName",
    },

    {
      type: "input",
      message: "Manager's ID",
      name: "managersID",
    },
    {
      type: "input",
      message: "Manager's email address",
      name: "managersEmail",
    },
    {
      type: "input",
      message: "Manager's Office Number",
      name: "managersOffice",
    },
  ])
  .then((response) => {
    htmlString += generateHeaderHTML();

    const manager = new Manager(
      response.managersName,
      response.managersID,
      response.managersEmail,
      response.managersOffice
    );
    managerArr.push(manager);

    htmlString += generateManagerHTML(manager);

    requestEmployees();
  });
//options to add employees
function requestEmployees() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "Would you like to add a Engineer or Intern.",
        name: "addEmployee",
        choices: ["Intern", "Engineer", "All done adding employees"],
      },
    ])
    .then((answers) => {
      console.log(answers);
      if (answers.addEmployee === "Engineer") {
        engineerQuestions();
      } else if (answers.addEmployee === "Intern") {
        internQuestions();
      } else if (answers.addEmployee === "All done adding employees") {
        htmlString += generateFooterHTML();
        fs.writeFileSync("output.html", htmlString, function (err) {
          if (err) console.log(err);
          console.log("HTML Generated Successfully");
        });

        return;
      }
    });
}
// function for engineer
function engineerQuestions() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Engineer's name?",
        name: "engineersName",
      },
      {
        type: "input",
        message: "Engineer's ID",
        name: "engineerID",
      },
      {
        type: "input",
        message: "Engineer's email",
        name: "engineersEmail",
      },
      {
        type: "input",
        message: "Engineer's Github Username?",
        name: "engineersGithub",
      },
    ])
    .then((response) => {
      const engineer = new Engineer(
        response.engineersName,
        response.engineerID,
        response.engineersEmail,
        response.engineersGithub
      );
      engineerArr.push(engineer);

      htmlString += generateEngineerHTML(engineer);
      requestEmployees();
    });
}
//function for intern
function internQuestions() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Intern's name?",
        name: "internName",
      },
      {
        type: "input",
        message: "Intern's ID",
        name: "internID",
      },
      {
        type: "input",
        message: "Intern's email",
        name: "internEmail",
      },
      {
        type: "input",
        message: "Intern's school?",
        name: "internSchool",
      },
    ])

    .then((response) => {
      const intern = new Intern(
        response.internName,
        response.internID,
        response.internEmail,
        response.internSchool
      );
      internArr.push(intern);
      htmlString += generateInternHTML(intern);
      requestEmployees();
    });
}
