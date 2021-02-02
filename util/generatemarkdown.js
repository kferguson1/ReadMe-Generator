function generatemarkdown(data) {
    return `
    # ${data.project}
    
    ## **Description**

    ${data.description}

    ---

    ## Table of Contents

    - [Description](#description)
    - [License](#license)
    - [Installation](#dependencyCommand)
    - [Test](#testCommand)
    - [Usage](#useRepo)
    - [Contributors](#contributeRepo)
    - [GitHub Info](#username) 
    - [Email] (#email)

    ---

    ## **License**

    ${data.license}

    ---

    ## **Installation**

    ${data.dependencyCommand}

    ---

    ## **Test**

    ${data.test}

    ---

    ## **Usage**

    ${data.useRepo}

    ---

    ## **Contributors**

    ${data.contributeRepo}

    ---

    ## **GitHub Info**

    Find me on GitHub: www.github.com/${data.username}

    ---

    ## **Email**

    Email me at: ${data.email}

    ---

`;
}
module.exports = generatemarkdown;