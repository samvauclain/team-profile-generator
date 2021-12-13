# Team Profile Generator

## Installation
- Install node.js if you don't already have it [Download Here](https://nodejs.org/en/)
- You can check to see if node is installed by typing **node -v** into your terminal 
- Fork the repo.
- Clone to your local directory of choice.
- In your root folder, install the dependencies by entering **npm install** in your terminal.

## Walkthrough Video
Once you have everything installed, [Click to watch:] (https://watch.screencastify.com/v/nzck9uSvW9KhYfsbPASC)


### AS A manager
- I WANT to generate a webpage that displays my team's basic info
- SO THAT I have quick access to their emails and GitHub profiles  
- GIVEN a command-line application that accepts user input

Covered in the video:
- Type node index to bring up the prompts
- Once completed, look in the **dist/** folder to find your generated index.html file containg your team!

---

WHEN I am prompted for my team members and their information  
- THEN an HTML file is generated that displays a nicely formatted team roster based on user  input  

WHEN I click on an email address in the HTML  
- THEN my default email program opens and populates the TO field of the email with the address  

WHEN I click on the GitHub username  
- THEN that GitHub profile opens in a new tab  

WHEN I start the application  
- THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number  

WHEN I enter the team manager’s name, employee ID, email address, and office number  
- THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team  

WHEN I select the engineer option  
- THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu  

WHEN I select the intern option  
- THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu  

WHEN I decide to finish building my team  
- THEN I exit the application, and the HTML is generated  

---

├── __tests__/             //jest tests
│   ├── Employee.test.js
│   ├── Engineer.test.js
│   ├── Intern.test.js
│   └── Manager.test.js
├── dist/                  // rendered output (HTML) and CSS style sheet      
├── lib/                   // classes
├── src/                   // template helper code 
├── .gitignore             // indicates which folders and files Git should ignore
├── index.js               // runs the application
└── package.json    