<div align="center"> 
 <div height="20px">
<a href="https://www.npmjs.com/package/express"><img width="175px" src="https://i.cloudup.com/zfY6lL7eFa-3000x3000.png"></a>
</div>
<h1>Section 5:</h1>
<h1>Express Advanced Topics</h1>
<hr>
 </div>

<br>

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
    <br>
    Express built-in middlewares:
        <a href="http://expressjs.com/en/api.html#express.json">express.json()</a>:
            Parses JSON payloads from the 'request.body' when a client makes an HTTP request.
            <br>
            Note: The 'request.body' can have the value of an empty 
            object if no input is recieved from the client.  
            <br>
            The reason for this is for the rest of your route handlers to interpret 'request.body'
            object in a readable format for JavaScript code to handle.
            <br>
            Example:
                'app.use(express.json())'
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