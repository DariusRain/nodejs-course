# Darius Rain - Node.js Course with [_Mash_](https://www.youtube.com/user/programmingwithmosh) 
## Section 4. Building RESTful API_s Using Express
&nbsp;
### 0). Commands: 
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
### 1). Command: npm i express
    //This installs express which is a lightweight framework for building a server.
    //This dependency will be shown in the 'package.json' file.
&nbsp;

### 2). Code: Set up express server and routes for your application. 
    // See file: index.js for the comments describing the process.

&nbsp;

### 3). Command: npm i -g nodemon 
    //Installs nodemon globally for any project you may use it.
    //nodemon is a tool used for development purposes not for production. The purpose of it is that it reloads the server
    //when a file is being changed so it is constantly watching for changes. 
&nbsp;


### 4). Code: Add process.env to the port vairable in 'index.js'
    //See file: 'index.js' explaination in comments.
&nbsp;

### 5). Command: export PORT=5000
    //Windows (CMD ~ Windows Command Prompt): 
        **Command: set <variable-name> = <value> 
    //Mac & Git Bash (Both are Bash terminals):
        **Command: exports <variable-name> = <value>
&nbsp;














