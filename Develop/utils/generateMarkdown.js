// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.Title}

  ## Description

    ${data.Description}

  ## Table of Contents:

  * [Installation](#installation)

  * [Usage] (#usage)

  * [License] (#license)

  * [Contributing] (#contributing)

  * [Tests] (#tests)

  * [Questions] (#questions)
 
  ##Installation

  To install necessary dependencies run the following command:
  \`\`\`
  ${data.Dependencies}
  \`\`\`
  `;
}

module.exports = generateMarkdown;
