# Darius Rain - Node.js Course with [_Mash_](https://www.youtube.com/user/programmingwithmosh) 
## Section 4. Building RESTful API_s Using Express
&nbsp;
### 0) Initialize and configure git repository and npm package.json
Commands: 
    //git init     
        ~Initializes a git repository
    
    //code README.md (Write to then save) 
        ~Create and save your 'README' file and save it.
        ~You do this in order to save somnething to the master branch so you can start making branches.
        ~NOTE: If you dont do the above then try to make a branch you will be just renaming your master branch.
            **ANTIDOTE Command: git branch -m master    **This command renames any current branch your on.

    //git add -A
        ~This adds all changes to the git staging area. 
        ~(git add -A): All files and directories everywhere in the git repository and branch that your in so can be executed anywhere.
        ~(git add .): All files and directories in the current directory and below it so this command matters wheer you execute it.
        ~To see what has been added to the stagin area or what isnt: 
            **Command: git status

    //git commit -m 'initial commit'
        ~You always execute this command after adding files and or directories you added to the staging area.
        ~This gives a commit message for all the files and directories in the current stagin area.
        ~After you will see there is nothing in the staging area unless you have untracked files and directories then you should be clean. 
        ~'initial commit' is the recommended commit message for your first commit

    //npm init -y
        ~Just like git init this command initializes instead of '.git' but package.json and sometimes package-lock.json
        ~This is a JSON file which is for humans and computers to understand what your application is and needs.
        ~You will find oput that JSON (Javascript Object Notation) is used to translate a lot of data to other technologies and frameworks.
        ~This package shows all the dependcies of your application
        ~NOTE: You need to do this becuase if you try to install something with:
            **Command: npm i <package-name> 

    //I put this as step zero becuse this should be something I allready should know. (💪MUSCLE MEMORY!)

&nbsp;
### 1) Install npm package 'express'.
Command: npm i express
    &nbsp;
    //This installs express which is a lightweight framework for building a server.
    //This dependency will be shown in the 'package.json' file.
&nbsp;

### 2) Configure express server in 'index.js' file. 

Code: 
&nbsp;
     // Set up express server and routes for your application. 
    //See comments in [_index.js_](https://github.com/DariusRain/nodejs-course/blob/4-2-create-server-routes-14-45/index.js)

&nbsp;

### 3) Install npm packge 'nodemon' (A dev dependency)
Command: npm i nodemon -D
    &nbsp;
    //Installs nodemon globally for any project you may use it.
    //nodemon is a tool used for development purposes not for production. The purpose of it is -
    //that it reloads the server when a file is being changed so it is - 
    //constantly watching for changes. 
&nbsp;


### 4) Add 'process.env.PORT' as a port variable.  
Code:
&nbsp;
    //Add process.env to the port vairable in 'index.js'
    //See comments in [_index.js_](https://github.com/DariusRain/nodejs-course/blob/4-4-add-code-for-enviroment-varible-18-46/index.js)

&nbsp;

### 5) Set enviromnent variable in terminal.

Command: export PORT=5000
&nbsp;
    //Windows (CMD ~ Windows Command Prompt): 
        **Command: set variable-name = value 
    //Mac & Git Bash (Both are Bash terminals):
        **Command: exports variable-name = value
&nbsp;

### 6) Route Parameters 'api/resource/:<route-paramater>'
Code:
&nbsp;
    //Add route parameters in the URI(Universal-Rescource-Identifier e.x:'/api/resource/id)
    //URI with route parameters 'api/resource/:id'
    //URIs can also have multiple route parameters 'api/resource/:month/:day/:year'
    //See comments in [_index.js_](https://github.com/DariusRain/nodejs-course/blob/4-6-route-paramaters-23-09/index.js) 
    //NOTE:
        //Route paramaters are required but query string paramaters are not. 
        //Query String paramaters are added to the uri starting with a question mark.
        //Syntax: required-uri/:required-route-parameter/?optional-querystring-paramater-key=optional-querystring-paramater-value
        //Ex: '/api/posts/:year/:month/?sortBy=name
        // Query Strings are always in the req.query object.
        // So the object in this case should appear as: {sortBy: 'name'} 












