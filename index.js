// node modules
const inquirer = require('inquirer');
const fs = require('fs');


// inquire to generate questions
inquirer.prompt(
    [
        {

            type:'input',
            message: 'what is your project title: ',
            name: 'title',

            // validate the inputs
            validate:(value) =>{if(value){return true} else {return 'Please enter a value'}},



        },

        {
            type: 'input',
            message: 'Enter Description of project: ',
            name: 'description',

            // validate the inputs
            validate:(value) =>{if(value){return true} else {return 'Please enter a value'}},

        },
        {
            type: 'input',
            message: 'Enter the installation instructions: ',
            name: 'installation',

            // validate the inputs
            validate:(value) =>{if(value){return true} else {return 'Please enter a value'}},

        },
        {
            type: 'input',
            message: 'How do you use the app: ',
            name: 'usage',

            // validate the inputs
            validate:(value) =>{if(value){return true} else {return 'Please enter a value'}},

        },
 
        {
            type: 'input',
            message: 'How do you run tests on this project: ',
            name: 'tests',

            // validate the inputs
            validate:(value) =>{if(value){return true} else {return 'Please enter a value'}},

        },
        {
            type: 'list',
            message: 'What type of license would you like: ',
            choices: ['MIT License', 'Apache License', 'GNU License', 'GPL License', 'N/A'],
            name: 'license',

            // validate the inputs
            validate:(value) =>{if(value){return true} else {return 'Please enter a value'}},

        },
        {
            type: 'input',
            message: 'Enter GitHub username: ',
            name: 'githubuser',

            // validate the inputs
            validate:(value) =>{if(value){return true} else {return 'Please enter a value'}},

        },
        {
            type: 'input',
            message: 'Enter email address: ',
            name: 'email',

            // validate the inputs
            validate:(value) =>{if(value){return true} else {return 'Please enter a value'}},

        }
    ]
).then(({
    title,
    description,
    installation,
    usage,
    tests,
    license,
    githubuser,
    email
})=>{
    /// template
const template = ` 
# ${title}
## Description
${description}
## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributions](#contributions)
* [Tests](#tests)
* [Questions](#questions)
## Installation
${installation}
## Usage
To execute this application, perform the following command:
**${usage}**
## License
${license}
## Contributions
${contribution}
## Tests
${tests}
## Questions
If there are any questions about this **${title}** application, then please feel
 free to contact me at either my GitHub profile
**https://github.com/${githubuser}**
or you can contact me at the following email address:
**${email}**
`;
    
 // function to create readme using fs module   
    
    createNewFile(title, template);

    
}


);

// create a new file

function createNewFile(fileName, data){

fs.writeFile(`./$(fileName.toLowerCase().split('').join('')).md`,data,(error)=>{

    if(err){
        console.log(err)
    }
    console.log("The readme file has been generated");
})


}



