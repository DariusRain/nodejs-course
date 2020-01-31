
![](https://cdn.freebiesupply.com/logos/large/2x/nodejs-1-logo-png-transparent.png)
<div align="center"> 
<h2>Section 4. Building RESTful APIs Using Express</h2>
 <hr style="color: black;">
 </div>


### What is REST or RESTful API?<br>

//[_REPRESENTATIONAL STATE TRANSFER_](https://doubleoctopus.com/security-wiki/protocol/representational-state-transfer/)

&nbsp;

### 0) Initialize and configure git repository and npm package.json

Commands: <br>
//git init <br>  
 ~Initializes a git repository <br>  
 //code README.md (Write to then save) <br>
~Create and save your 'README' file and save it. <br>
~You do this in order to save somnething to the master branch so you can start making branches. <br>
~NOTE: If you dont do the above then try to make a branch you will be just renaming your master branch. <br>
ANTIDOTE Command: git branch -m master This command renames any current branch your on. <br>
//git add -A <br>
~This adds all changes to the git staging area.
~(git add -A): All files and directories everywhere in the git repository and branch <br>
~that your in so can be executed anywhere. <br>
~(git add .): All files and directories in the current directory and below it so this <br>
~command matters wheer you execute it. <br>
~To see what has been added to the stagin area or what isnt: <br>
Command: git status <br>
//git commit -m 'initial commit' <br>
~You always execute this command after adding files and or directories you added to the staging area. <br>
~This gives a commit message for all the files and directories in the current stagin area. <br>
~After you will see there is nothing in the staging area unless you have untracked files and <br>
~directories then you should be clean. <br>
~'initial commit' is the recommended commit message for your first commit<br>
//npm init -y<br>
~Just like git init this command initializes instead of '.git' but package.json and sometimes package-lock.json<br>
~This is a JSON file which is for humans and computers to understand what your application is and needs. <br>
~You will find oput that JSON (Javascript Object Notation) is used to translate a lot of data <br>
~to other technologies and frameworks.<br>
~This package shows all the dependcies of your application<br>
~NOTE: You need to do this becuase if you try to install something with:<br>
Command: npm i <package-name> <br>
//I put this as step zero becuse this should be something I allready should know. (💪MUSCLE MEMORY!)<br>

&nbsp;

### [_1)_](https://youtu.be/pKd0Rpw7O48?t=410) Install npm package 'express'.

Command: npm i express <br>
&nbsp;
//Node dependencies come from [_npm_](https://npmjs.com) (Node Package Manager)<br>
//This installs express which is a lightweight framework for building a server.<br>
//This dependency will be shown in the 'package.json' file. <br>
&nbsp;

### [_2)_](https://youtu.be/pKd0Rpw7O48?t=550) Configure express server in 'index.js' file.

Code: <br>
&nbsp;
// Set up express server and routes for your application. <br>
//See comments here [_branch:4-2@index.js_](https://github.com/DariusRain/nodejs-course/blob/4-2-create-server-routes-14-45/section-4-restful-api/index.js) <br>

&nbsp;

### [_3)_](https://youtu.be/pKd0Rpw7O48?t=897) Install npm packge 'nodemon' (A dev dependency)

Command: npm i nodemon -D <br>
&nbsp;
//'-g' flag installs nodemon globally for any project you may use it.<br>
//nodemon is a tool used for development purposes not for production. The purpose of it is -<br>
//that it reloads the server when a file is being changed so it is - <br>
//constantly watching for changes. <br>
&nbsp;

### [_4)_](https://youtu.be/pKd0Rpw7O48?t=1015) Add 'process.env.PORT' as a port variable.

Code: <br>
&nbsp;
//Add process.env to the port vairable in 'index.js' <br>
//See comments here [_branch:4-4@index.js_](https://github.com/DariusRain/nodejs-course/blob/4-4-add-code-for-enviroment-varible-18-46/section-4-restful-api/index.js) <br>

&nbsp;

### [_5)_](https://youtu.be/pKd0Rpw7O48?t=1119) Set enviromnent variable in terminal.

Command: export PORT=5000 <br>
&nbsp;
//Windows (CMD ~ Windows Command Prompt): <br>
Command: set variable-name=value <br>
//Mac & Git Bash (Both are Bash terminals): <br>
Command: export variable-name=value <br>
&nbsp;

### [_6)_](https://youtu.be/pKd0Rpw7O48?t=1186) Route Parameters 'api/resource/:<route-paramater>'

Code:<br>
&nbsp;
//Add route parameters in the URI(Universal-Rescource-Identifier e.x:'/api/resource/id) <br>
//URI with route parameters 'api/resource/:id' <br>
//URIs can also have multiple route parameters 'api/resource/:month/:day/:year' <br>
//See comments [_branch:4-6@index.js_](https://github.com/DariusRain/nodejs-course/blob/4-6-route-paramaters-23-09/section-4-restful-api/index.js) <br>
//NOTE:<br>
//Route paramaters are required but query string paramaters are not. <br>
//Query String paramaters are added to the uri starting with a question mark.<br>
//Syntax: required-uri/:required-route-parameter/?optional-querystring-paramater-key=optional-querystring-paramater-value <br>
//Ex: '/api/posts/:year/:month/?sortBy=name <br>
// Query Strings are always in the req.query object. <br>
// So the object in this case should appear as: {sortBy: 'name'} <br>
&nbsp;

### [_7)_](https://youtu.be/pKd0Rpw7O48?t=1522) Handling 'GET' requests.

Code: <br>
&nbsp;
//Use the route parameter's value with the find() method that returns based on a set boolean comparison. <br>
//See comments here [_branch:4-7@index.js_](https://github.com/DariusRain/nodejs-course/blob/4-7-handling-get-requests-33-10/section-4-restful-api/index.js)<br>

&nbsp;

### [_8)_](https://youtu.be/pKd0Rpw7O48?t=1810) Handling 'POST' requests.

Code: <br>
&nbsp;
//Use the '.post()' method with express and add the route and callback that returns the value of a new post.<br>
//See comments here [_branch:4-8@index.js_](https://github.com/DariusRain/nodejs-course/blob/4-8-handling-post-requests-33-54/section-4-restful-api/index.js)<br>

&nbsp;

### [_9)_](https://youtu.be/pKd0Rpw7O48?t=2035) Install and use [_Postman_](https://www.getpostman.com/downloads/).

Note: Skip download & installment of Postman if you allready have it. <br>
&nbsp;
//Postman is a software that helps developers test their APIs by sending and retriving data using its features. <br>
//The reason for this becouse using the browser to test our API sometimes requires some html code. <br>
//So Postman is a great help in development. <br>

&nbsp;

### [_10)_](https://youtu.be/pKd0Rpw7O48?t=2163) Input Validation.

Code:<br>
&nbsp;
//See comments here [_branch:4-10@index.js_](https://github.com/DariusRain/nodejs-course/blob/4-10-input-validation-example-36-04/section-4-restful-api/index.js)<br>
//Add some input logic for the post request, in this case I am using boolean logic to solve this. <br>
//But in real world application you should use a node package similar to express but to handle the validation of data being sent to the client. <br>
//So in the next section I will be using the Joi package from [_npm_](https://npmjs.com). <br>
&nbsp;

### [_11)_](https://youtu.be/pKd0Rpw7O48?t=2270) Input Validation with npm package [_'Joi'_](https://www.npmjs.com/package/@hapi/joi).

Code: <br>
&nbsp;
//See comments here [_branch:4-11@index.js_](https://github.com/DariusRain/nodejs-course/blob/4-11-joi-input-validation-37-50/section-4-restful-api/index.js)<br>
//The Joi package is a framework that helps developers set standards to their data structures by using schemas.<br>
//Joi also validates any new data sent by the client based in any schema you set in place.<br>
//IMPORTANT: Syntax changes due to new owner of git repo (Explain new syntax in [_comments_](https://github.com/DariusRain/nodejs-course/blob/4-11-joi-input-validation-37-50/section-4-restful-api/index.js)).<br>
&nbsp;

### [_12)_](https://youtu.be/pKd0Rpw7O48?t=2643) Handling 'PUT' requests.

Code: <br>
&nbsp;
//See comments here [_branch:4-12@index.js_](https://github.com/DariusRain/nodejs-course/blob/4-12-handling-put-requests-44-03/section-4-restful-api/index.js)<br>
//The code logic to the PUT request used a combination of the find() method with the Joi validate() method.<br>
//Added a function that takes a given parameter then validates that parameter with a set schema.<br>
//Added an extra function that takes an array and object and assigns those values to the find() method then returns its value.<br>
&nbsp;

### [_13)_](https://youtu.be/pKd0Rpw7O48?t=3153) Handling 'DELETE' requests.

Code: <br>
&nbsp;
//See comments here [_branch:4-12@index.js_](https://github.com/DariusRain/nodejs-course/blob/4-13-handling-delete-requests-52-33/section-4-restful-api/index.js)<br>
//The DELETE request was alot like a GET request with route parameters but adding deletion logic - <br>
//- after a value has been found and if false return a 404 status codeif value is not found.
