<div align="center" height="20px">
<img width="175px" src="https://cdn.freebiesupply.com/logos/large/2x/nodejs-1-logo-png-transparent.png">
<img width="175px" src="http://expressjs.com/">

</div>
<div align="center"> 
<h1>Section 5. Express Advanced Topics</h1>
 <hr style="color: black;">
 </div>

<br>

<h3>1) <a href="http://expressjs.com/en/guide/using-middleware.html">Middleware.</a></h3>
<div>
<pre>
    Code: 
    See code & comments -> <a href="#">branch:4-1@index.js</a>
    Middleware is a function that takes the current request object being passed through 
    the <a href="https://dzone.com/articles/understanding-middleware-pattern-in-expressjs">Request Processing Pipeline</a> and either returns the response object or 
    returns the next middleware function in the pipeline. 
    Note: The middleware can be used to make changes and or use the data from the request object. 
</pre>
<b align="center" >Request Processing Pipeline</b>
<br>
<img align="center" src="https://vietcanho.files.wordpress.com/2016/06/middleware.png?w=1462">
</div>