# Team-Profile-Generator

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Our Task

Build a Node.js command-line application that takes in information about employees on a software engineering team, then generates an HTML webpage that displays summaries for each person.

The application will be invoked by using the following command:

```bash
node index.js
```

## User Story

```md
AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles
```

## Table of Contents

  - [Installation](#installation)
  - [Acceptance Criteria](#acceptance-criteria)
  - [Links](#links)
  - [Demo](#demo)

## Installation

* Inquirer module
* Jest module


## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated
```

## Links

* GitHub: https://github.com/sflores926/Team-Profile-Generator


## Demo

![gif of how to create team profiles through node.js](./Assets/screencapture-file-Users-sflores-Desktop-Team-Profile-Generator-dist-index-html-2022-09-01-17_12_03.png)


https://user-images.githubusercontent.com/106363593/188050704-4645c854-c717-4208-8c12-1ef24d4eb110.mp4

