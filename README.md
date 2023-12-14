# Super Galactic Age Calculator

#### An application that determines a user's age based on a planet's solar years.

#### By Kim Robinson

## Technologies Used

* Html
* Javascript, ES6
* CSS
* Bootstrap
* npm to manage dependencies (node package manager)
* webpack (to lint, bundle and package code)
* Jest
* ESLint

## A code review for Epicodus to demonstrate Test-Driven-Development and Environments with JavaScript

###  This app will take a user's age input and:
    -Return their age in Mercury years. 
    -Return their age in Venus years. 
    -Return their age in Mars years. 
    -Return their age in Jupiter years.
    -Determine how many years have passed on each planet since a past birthday. 
    -Determine how many years have yet to pass until a future birthday. 

## Setup/Installation Requirements

1. Navigate to my github repository for this project (https://github.com/kimmykokonut/galactic-age-calculator)

2. Click the 'Fork' button and  you will be taken to a new page where you can give your repository a new name and description. Choose "create fork".

3. Click the 'code' button and copy the url for HTTPS.

4. On your local computer, create a working directory for my files and name appropriately.

5. On your terminal, type _$ git clone 'url'_ (using the url from step 3.)

6. On your terminal, type _$ code ._ to open in VS Code.  If you do not have VS Code Editor, you may download here: https://code.visualstudio.com/

7. Once in VS Code, open the terminal there and type _$ npm install_ (to install the packages and dependencies).

8.  Now you can access my code. To see it rendered in a browser you can start a development server by typing _$ npm run start_ in the VS Code terminal and it should open a browser window located at localhost.8080 

9. Now you can see your age based on other planets solar years!

_If this is too much and you just want to see what it looks like, go to my github pages for this project here:  https://kimmykokonut.github.io/galactic-age-calculator_

### Optional:
* If you want to build onto the project, you can run the terminal command _$ npm run build_
* If you want to lint the JS files in the SRC folder you can run the terminal command _$ npm run lint_
* If you want to run tests on the business logic you may do some in the terminal command _$ npm run test_
* To learn more about npm, go here: https://www.freecodecamp.org/news/what-is-npm-a-node-package-manager-tutorial-for-beginners/

## Known Bugs

* The tests pass, the math is right. Something strange is happening starting with responseVenusPast in index.js. I think the this.age is being mutated as all future DOM values are incorrect.  Since this project is about testing, I won't spend more time digging into this at this point in time.  
_Expected Values for person input ("Geneveve", 13, 3, 21)_

Past: 
* Venus 16.13
* Mars 5.32
* Jupiter 0.84

Future:
* Earth 8
* Mercury 33.33
* Venus 12.9
* Mars 4.26
* Jupiter 0.67

## License
MIT License. See license.md for further information