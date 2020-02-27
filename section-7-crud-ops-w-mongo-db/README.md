<p>
Darius Rain <br>
CRUD operations using <a href="https://www.mongodb.com/">Mongoose Database</a> 
& npm <a href="https://www.npmjs.com/package/mongoose">mongoose</a> package.
</p>
<hr>
<br>
<h3> 1) Connecting to MongoDB local or Atlas with npm <a href="https://www.npmjs.com/package/mongoose">mongoose</a></h3>.
<div>
    <pre>
        Note: If you did'nt, Create a cluster with <a href="https://www.mongodb.com/cloud/atlas">MongoDB Atlas</a> (Cloud) 
        or install <a href="https://www.mongodb.com/download-center/community">MongoDB Community Server</a> (Local)
        <br>
         Install mongoose from npm:
            Commands:
                npm i mongoose
        <br>
        Set enviroment variables with a Bash Script:
            <br>
            Note: You need to be using a Bash shell for the above script to work if you dont install <a href="https://git-scm.com/downloads">Git Bash</a> for windows,
                if on MAC or linux it should work without GIt Bash.
            <br>
            Commands:
                - mkdir enviroment_scripts
                - nano enviroment_scripts/set_enviroment_development.sh
                    <code>
                        #!/bin/bash
                        export DB=mongodb://localhost:27017/local_db (Or Atlas connection string)
                        export NODE_ENV=development
                        echo 'Set enviroment to development'        
                    </code>
                - Ctrl + s
                - Ctrl + x
                - . enviroment_scripts/set_enviroment_development.sh
                Should see the message 'Set enviroment to development'
                <br>
                Note: Make sure to include the '.' before the path to the shell script.
                It Stands for the current directory, otherwise the enviroment wont be set 
                at all.
                <br>
                Note: Do not include this in your commit to git, github or public source file.
                    Solution is either add it to a '.gitignore' file 
                    or dont include it in your project's directory at all and execute it
                    from a path elsewhere on your computer. 
                    Also the script only needs to be executed again if your computer did a complete reboot or shutdown.
                <br>
        Now add the following to your server.js file  
            <code>
            const mongoose = require('mongoose');
            const db = process.env.DB
            const enviroment = process.env.NODE_ENV
            mongoose.connection(
            db, 
            {useNewUrlParser: true, useUnifiedTopology: true}, 
            () => {console.log('Connected to database')}
            )
            </code>
    </pre>
</div>
