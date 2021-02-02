function generatemarkdown(data) {
    return `
    # **${answers.project}**
    
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

    ${data.username}

    ---

    ## **Email**

    ${data.email}

    ---

`;
}
module.exports = generatemarkdown;