# Darius Rain - Node.js Course with [_Mosh_](https://www.youtube.com/user/programmingwithmosh)

## Section 4. Building RESTful API_s Using Express
&nbsp;

### What is REST or RESTful API?
&nbsp;

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

### 1) Install npm package 'express'.

Command: npm i express <br>
&nbsp;
//This installs express which is a lightweight framework for building a server.<br>
//This dependency will be shown in the 'package.json' file. <br>
&nbsp;

### 2) Configure express server in 'index.js' file.

Code:
&nbsp;
// Set up express server and routes for your application. <br>
//See comments in [_index.js_](https://github.com/DariusRain/nodejs-course/blob/4-2-create-server-routes-14-45/index.js) <br>

&nbsp;

### 3) Install npm packge 'nodemon' (A dev dependency)

Command: npm i nodemon -D <br>
&nbsp;
//'-g' flag installs nodemon globally for any project you may use it.<br>
//nodemon is a tool used for development purposes not for production. The purpose of it is -<br>
//that it reloads the server when a file is being changed so it is - <br>
//constantly watching for changes. <br>
&nbsp;

### 4) Add 'process.env.PORT' as a port variable.

Code:
&nbsp;
//Add process.env to the port vairable in 'index.js' <br>
//See comments in [_index.js_](https://github.com/DariusRain/nodejs-course/blob/section-4-restful-api/4-4-add-code-for-enviroment-varible-18-46/index.js) <br>

&nbsp;

### 5) Set enviromnent variable in terminal.

Command: export PORT=5000 <br>
&nbsp;
//Windows (CMD ~ Windows Command Prompt): <br>
Command: set variable-name=value <br>
//Mac & Git Bash (Both are Bash terminals): <br>
Command: exports variable-name=value <br>
&nbsp;

### 6) Route Parameters 'api/resource/:<route-paramater>'

Code:
&nbsp;
//Add route parameters in the URI(Universal-Rescource-Identifier e.x:'/api/resource/id) <br>
//URI with route parameters 'api/resource/:id' <br>
//URIs can also have multiple route parameters 'api/resource/:month/:day/:year' <br>
//See comments in [_index.js_](https://github.com/DariusRain/nodejs-course/blob/4-6-route-paramaters-23-09/index.js) <br>
//NOTE:<br>
//Route paramaters are required but query string paramaters are not. <br>
//Query String paramaters are added to the uri starting with a question mark.<br>
//Syntax: required-uri/:required-route-parameter/?optional-querystring-paramater-key=optional-querystring-paramater-value <br>
//Ex: '/api/posts/:year/:month/?sortBy=name <br>
// Query Strings are always in the req.query object. <br>
// So the object in this case should appear as: {sortBy: 'name'} <br>
&nbsp;

### 7) Handling 'GET' requests.
Code:
&nbsp;
//
