const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generatemarkdown = require('./util/generatemarkdown');


Questions 
  .prompt([
    {
      type: 'input',
      message: 'What is your GitHub username?',
      name: 'username',
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'What is your project name?',
        name: 'project',
    },
    {
        type: 'input',
        message: 'Please write a short description of your project:',
        name: 'description',
    },
    {
        type: 'input',
        message: 'What kind of license should your project have?',
        name: 'license',
    },
    {
        type: 'input',
        message: 'What command should be run to install dependencies?',
        name: 'dependencyCommand',
    },
    {
        type: 'input',
        message: 'What command should be run to run tests?',
        name: 'testCommand',
    },
    {
        type: 'input',
        message: 'What does the user need to know about using the repo?',
        name: 'useRepo',
    },
    {
      type: 'input',
      message: 'What does the user need to know about contributing to the repo?',
      name: 'contributeRepo',
    },
  ]);

  function writetoFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if(err) {
            return console.log(err);
        }
        console.log("README.md file generated successfully!")
    });
};

const writeFileAsync = util.promisify(writetoFile);

// // Open App
async function init() {
    try {
        const answers = await inquirer.prompt;
        const markdown = generateMarkdown(answers);
        console.log(markdown);

        await writeFileAsync('ReadMe.md', markdown);
    } catch (error) {
        console.log(error);
    }
};

init();