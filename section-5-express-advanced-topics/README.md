
<p>
 Darius Rain <br>
 Section 5: Express Advanced Topics
</p>

<hr>

<h3>1) <a href="http://expressjs.com/en/guide/using-middleware.html">Middleware.</a></h3>
<div>
<pre>
    Middleware is a function that inherits the request object (A parameter) from the <a href="https://dzone.com/articles/understanding-middleware-pattern-in-expressjs">Request Processing Pipeline</a>
    and either returns the response object (A parameter) or returns the next middleware function in the pipeline.
</pre>
<b align="center" >Request Processing Pipeline:</b>
<br>
<img align="center" src="https://vietcanho.files.wordpress.com/2016/06/middleware.png?w=1462">
<br>
</div>

<br>

<h3>2) Custom Middleware.</h3>
<div>
    <pre>
    See code & comments -> <a href="https://github.com/DariusRain/nodejs-restful-apis/blob/5-2-custom-middleware-vid-3/section-5-express-advanced-topics/index.js">branch:5-2@index.js</a>
    Custom middleware is when you add your own call back function as a parameter 
    in the 'use()' route handler method.
    <br>
    All middleware functions takes 3 parameters the request object called 'req',
    response object called 'res' and a callback function called 'next()'.
    E.x: app.use((req, res, next) => {...}) or app.use(predefined-callback)
    Note: The middleware can be used to make changes and or use the data from the request object.
    <br>
    Custom Middleware is commonly imported into a file.
    Examples:
     Export: 'module.exports = functionName' 
     Import: 'const variableImportVal = require('pathToFile');'
     Middleware: 'app.use(variableImportVal);' ~Same syntax for installed middleware from packages.
    </pre>
</div>

<br>

<h3>3) Built-in Middleware.</h3>
<div>
    <pre>
    See code & comments -> <a href="https://github.com/DariusRain/nodejs-restful-apis/blob/5-3-built-in-middleware-vid-4/section-5-express-advanced-topics/index.js">branch:5-3@index.js</a>
    Express built-in middlewares:
        <a href="http://expressjs.com/en/api.html#express.json">express.json()</a>:
            Parses JSON payloads from the 'request.body' when a client makes an HTTP request.
            <br>
            Note: The 'request.body' can have the value of an empty 
            object if no input is recieved from the client.  
            <br>
            The reason for this is for the rest of your route handlers to interpret the 'request.body'
            object in a readable format for JavaScript code to handle.
            <br>
            Example:
                'app.use(express.json());'
            <br>
        <a href="http://expressjs.com/en/api.html#express.urlencoded">express.urlEncoded()</a>: 
            Interprets a URL Encoded payload from the client (ex: http//localhost:3000/key=value&key=value),
            so any of your route handlers can use the payload as a object during operations.
            <br>
            Note: In order for this middleware function to interpret complex objects then
            you need to pass an object as a parameter ->
                'express.urlEncoded({extended: true})'
            <br>
            This middleware is commonly used when a client submits a form to the server 
            in the 'body' property of the request object.
            <br>
            Example:
                'app.use(express.urlEncoded(express.urlEncoded({extended: true})))'
            <br>
        <a href="http://expressjs.com/en/api.html#express.static">express.static()</a>:
            Used to serve a static folder to the client, it needs a directory name as the first parameter,
            then that folder will be served in the root '/' of the site and the contents of the folder
            will be static.
            <br>
            Note: Scince the file will be served in the root of the site you will not see that directory name
            in the URL.
            Note: You dont generally serve static files in Node.js applications.
            <br>
            Static files are documents that are served to the client that do not change, meaning
            that there is no server-side code creating new files on the fly.
            <br>
            Example:
                'app.use(express.static('directory-name'))'
    </pre>
</div>
    
<br>

<h3>4) <a href="http://expressjs.com/en/resources/middleware.html">Third Party Middleware.</a></h3>
<div>
    <pre>
    See code & comments -> <a href="https://github.com/DariusRain/nodejs-restful-apis/blob/5-4-third-party-middleware-vid-5/section-5-express-advanced-topics/index.js">branch:5-4@index.js</a>
    Third party middlewares I'm using:
        <a href="https://github.com/helmetjs/helmet">Helmet</a>:
            Used for securing application by setting HTTP headers.
            Command: 'npm i helmet'
            Code: 
                'const hemlet = require('helmet');' ~ (Import package)
                'app.use(helmet());' ~ (Use package as middleware)
        <br>
        <a href="http://expressjs.com/en/resources/middleware/morgan.html">Morgan</a>:
            Used to log HTTP requests in the console of the server.
            Command: 'npm i morgan'
            <br>
            Note: This is only used in develoment and not production, and is usually used to log 
            a result in a specific location in your code.
            <br>
            Code: 
                'const morgan = require('morgan');'
                'app.use(morgan(~Format-type-paramater~));'
        <br>
    </pre>
</div>

<h3>5) <a href="https://en.wikipedia.org/wiki/Deployment_environment">Deployment Enviroments.</a></h3>
<div>
    <pre>
    See code & comments -> <a href="https://github.com/DariusRain/nodejs-restful-apis/blob/5-5-enviroments-vid-6/section-5-express-advanced-topics/index.js">branch:5-5@index.js</a>
    Deployment enviroments are categorized by names it could be a 'production' or 
    'development' enviroment. (There are more enviroments then those two).
    <br>
    The reason behind this is that you can set your application to execute
    specific features based on the enviroment it is in.
    <br>
    You can access the current type of deployment enviroment in the 'process.env' 
    object with the property of 'NODE_ENV', or you can access 
    it this way 'app.get('env')'.
    Both should return a string representing the current enviroment your application is running in.
    <br>
    Examples:
        'process.env.NODE_ENV' 
        (Returns 'undefined' by default if no enviroment variable is set in the terminal)
        Command to set the name of deployment enviroment'export NODE_ENV=development'
        <br>
        'app.get('env')' 
        (Returns 'development' by default if no  is set in terminal)
    <br> 
    Now boolean logic can figure out what enviroment your application is using.
    Now specific code can be executed varying on the enviroment value. 
    </pre>
</div>

<h3>6) Configuration.</h3>
<div>
    <pre>
    See configuration files -> <a href="https://github.com/DariusRain/nodejs-restful-apis/tree/5-6-configuration-vid-7/section-5-express-advanced-topics/config">branch:5-6@config/</a>
    Installed npm package: '<a href="https://npmjs.com/package/config">config</a>'
        The config package allows you to modify/set configurations with JSON.
        Each enviroment can be represented by its name then with a
        json file extension (development.json, production.json)
        <br>
        Example:
            1. Create Config directory & then a JSON file with the name of the enviroment. 
            Create File: config/development.json (More files than below see configuration files.)
                {
                "name": "Application - Development",
                "db": {
                    "uri": "mongod://localhost:27017/express-app", 
                    },
                "mail": {
                    "host":"123.254.21.32/90" 
                    }
                }
                <br>
            Create File: config/custom-enviroment-variables
                {
                "db": {
                    "username":"secret_username", //Command: exports secret_username=username-here
                    "password":"secret_password_db"
                },
                "mail": {
                    "password":"secret_password_mail", 
                }
                }
            <br>
            2: Import the config package (If you didnt install: 'npm i config')
                'const config = require('config')'
            <br>
            3: Log to the console the name of application, host and uri.
                'console.log(`Name: ${config.name} \n Host: ${mail.host} \n DB: ${db.uri}`)'
            <br>
            4: Set secret enviroment variables in terminal then test run the node application
            'nodemon app.js'
        <br>
        Now you can use this through out your code. Even adding other configurations and variable. 
    </pre>
</div>
<br>
<h3>7) Debugging.</h3>
<div>
    <pre>
        See code & comments -> <a href="https://github.com/DariusRain/nodejs-restful-apis/tree/5-7-debugging-vid-8/section-5-express-advanced-topics/index.js">branch:5-7@index.js</a>
        <br>
            The reason for installing the 'debug' package is so that you can log messages in certain
            area(s) in your code, based on the value you set the 'DEBUG' variable in your terminal. 
            So this package frees you from having to manually delete, comment or add code that 
            logs to the console all by configuring values in the enviroment. 
        <br> 
        1: Install npm package '<a href="https://www.npmjs.com/package/debug">debug</a>'.
            'npm i debug'
            <br>
        2: Import it in the main file 'app.js' or 'index.js' whatever the name is.
            'const debug = require('debug')('app:start')'
            'const debug2 = require('debug')('app:db')'
         You can now use one to log for normal stuff and the other to log the database status,
            or other misc. tasks you want to see the status too also.
            <br>
        3: Add the debug logger throughout the code where you would like to log messages.
            'debug('Put log Message here')' ~ Normal logging
            'devug2('Put log message here') ~ For logging messagess
            <br>
        4: Go to dirtectory of the application in terminal
            Command: 'export DEBUG=app:start'
            <br>
         This now activates log messages only to be made by the variable you assigned the
         value of 'app:start' too (See step 2). In my case it will only log messages with
         the syntax 'debug()' and not 'debug2()'.
    </pre>
</div>
<br>
<h3>8) <a href="https://expressjs.com/en/resources/template-engines.html">Templating engines in express.</a> (Using HTML unless needed.)</h3>
<div>
    <pre>
        Templating engines are a subsitute for writing html code with less use of charachters.
    </pre>
</div>
<br>
<h3>9) <a href="http://expressjs.com/en/guide/database-integration.html#database-integration">Database integration.</a></h3>
<div>
    <pre>
        Express has drivers that you can install to work with your database of choice.
        For MongoDB you install driver 'mongodb'.
        Another one is 'mongoose' which is
        created on top of the 'mongodb' package.
     </pre>
</div>
<br>

<h3>10) Structring express applications.</h3>
<div>
    <pre>
        Create a folder that stores routes and route name as individual files.
            1: 'mkdir routes'
            2: 'code routename1 routename2 ...'
            3: Cut & Paste all routes by routename into the seprate files.
            4: Ipmort express and use 'express.Router()' instead of 'express()'.
            5: Export the value of 'express.Router()' & import it in the main route handler file.
            6: After importing all the routes add the route path and the route value as middleware.
     </pre>
</div>