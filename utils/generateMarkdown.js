// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  var badgeURL;

  switch(license){
    case 'Apache 2.0':
      badgeURL = 'https://img.shields.io/badge/License-Apache%202.0-blue.svg';
      break;
    case 'Cocoapods':
      badgeURL = 'https://img.shields.io/badge/license-MIT-%23373737';
      break;
    case 'GNU GPL v3':
      badgeURL = 'https://img.shields.io/badge/License-GPLv3-blue.svg';
      break;
    case 'Eclipse Public License 1.0':
      badgeURL = 'https://img.shields.io/badge/License-EPL%201.0-red.svg';
      break;
    case 'MIT':
      badgeURL = 'https://img.shields.io/badge/License-MIT-yellow.svg';
      break;
    case 'Mozilla':
      badgeURL = 'https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg';
      break;
    case 'Perl':
      badgeURL = 'https://img.shields.io/badge/License-Perl-0298c3.svg';
      break;
    default:
      badgeURL = "";
  }


  return `[![License: ${license}](${badgeURL})]`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  var linkURL;

  switch(license){
    case 'Apache 2.0':
      linkURL = 'https://opensource.org/licenses/Apache-2.0';
      break;
    case 'Cocoapods':
      linkURL = 'https://cocoapods.org/pods/Licenses';
      break;
    case 'GNU GPL v3':
      linkURL = 'https://www.gnu.org/licenses/gpl-3.0';
      break;
    case 'Eclipse Public License 1.0':
      linkURL = 'https://opensource.org/licenses/EPL-1.0';
      break;
    case 'MIT':
      linkURL = 'https://opensource.org/licenses/MIT';
      break;
    case 'Mozilla':
      linkURL = 'https://opensource.org/licenses/MPL-2.0';
      break;
    case 'Perl':
      linkURL = 'https://opensource.org/licenses/Artistic-2.0';
      break;
    default:
      linkURL = "";
  }

  return `[License: ${license}](${linkURL})`;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  const link = renderLicenseLink(license);

  return `The application is covered under the license: ${link}. Click the name of the license for more information.`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const badge = renderLicenseBadge(data.license);
  const license = renderLicenseSection(data.license);

  const contents = `* [Installation](#installation)\n* [Usage](#usage)\n* [License](#license)\n* [Task](#Task\n* [output](#output)\n* [Questions](#questions)`;

  const username = `[${data.username}](https://github.com/${data.username}). Click the username to access the GitHub repository.`

  return `${badge}\n\n
  # ${data.title} \n\n
  ## Description \n\n${data.description} \n\n
  ## Table of Contents\n\n${contents}\n\n
  ## Installation \n\n${data.installation} \n\n
  ## Usage \n\n${data.usage} \n\n## License \n\n
  ${license}\n\n## output \n\n
  ${data.output}\n\n## Task Deligation \n\n${data.tests}\n\n
  ## Questions \n\nContact directly for more information:\n\nGitHub Username: ${username} \n\nEmail Address: [${data.email}](mailto:${data.email})`;
}

module.exports = generateMarkdown;