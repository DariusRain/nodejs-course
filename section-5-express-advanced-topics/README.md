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


<h3>2) Custom Middleware.</h3>
<div>
    <pre>
    See code & comments-> <a href="https://github.com/DariusRain/nodejs-restful-apis/blob/5-2-custom-middleware-vid-3/index.js">branch:5-2@index.js</a>
    Custom middleware is when you add your own call back function as a parameter in the 'use()' route handler method.
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
