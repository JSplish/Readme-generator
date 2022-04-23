
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "None") {
    return ''
  } else {
    return `![License](https://img.shields.io/badge/license-${license}-brightgreen)`
  }
}


// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "None") {
    return ''
  } else if (license === 'Apache') {
    return "https://opensource.org/licenses/Apache-2.0"
  } else if (license === "MIT") {
    return "https://opensource.org/licenses/MIT"
  } else if (license === "Mozilla Public") {
    return "https://opensource.org/licenses/MPL-2.0"
  } else if (license === "GNU-General-Public") {
    return "https://www.gnu.org/licenses/gpl-3.0"
  } else if (license === "IBM") {
    return "https://opensource.org/licenses/IPL-1.0"
  };
};


// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "None") {
    return "Project does not require or have a license"
  } else {
    return `License for the project is: ${license}`
  }
}


function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ## DESCRIPTION
  ${data.info}

  ## TABLE OF CONTENTS
  [Installation](#installation)  
  [Usage](#usage)  
  [License](#license) 
  [Contributing](#contributing)  
  [Tests](#tests)   
  [Questions](#questions)
  
  ## INSTALLATION
  ${data.installation}

  ## USAGE
  ${data.usage}

  ## CONTRIBUTING
  ${data.contribution}

  ## TESTS
  ${data.testing}

  ## LICENSE
  ${renderLicenseSection(data.licensing)}
  ${renderLicenseLink(data.licensing)}

  ## QUESTIONS
  GITHUB: https://github.com/${data.github}
  EMAIL: ${data.email}

`;
}

module.exports = generateMarkdown;
