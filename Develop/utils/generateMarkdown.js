//function to select proper badge for license
function selectBadge(Licenses){
  const MIT =`[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  const Apache = `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
  const Mozilla = `[![License](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
  const Perl = `[![License](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)`;

  if (Licenses === "MIT"){
    return MIT;
  } else if (Licenses === "Apache"){
    return Apache;
  } else if (Licenses === "Mozilla"){
    return Mozilla;
  } else {
    return Perl;
  }
}

// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.Title}
 
  ## Description

  ${data.Description}

  ## GitHub

  ${data.GitHub}

  ## Email

  ${data.Email}

  ## Project URL

  ${data.URL}


  ## Table of Contents:

  * [Installation](#installation)

  * [Usage](#usage)

  * [License](#license)

  * [Contributing](#contributing)

  * [Tests](#tests)

  * [Questions](#questions)
 
  ## Installation

  To install necessary dependencies, run the following command:
  \`\`\`
  ${data.Dependencies}
  \`\`\`

  ## Usage

  \`\`\`
  ${data.Using}
  \`\`\`

  ## License

  This project is licensed under:

  \`\`\`  
  ${data.Licenses}
  \`\`\`
    
  ${selectBadge(data.Licenses)}

  ## Contributing

  \`\`\`
  ${data.Contributing}
  \`\`\`

  ## Tests

  To run tests, run the following command:
  \`\`\`
  ${data.Tests}
  \`\`\`
  
  ## Questions

  For any questions regarding this application, please contact ${data.GitHub} at ${data.Email}.

  `;
}

module.exports = generateMarkdown;
