<div align="center" height="20px">
<img width="175px" src="https://cdn.freebiesupply.com/logos/large/2x/nodejs-1-logo-png-transparent.png">

</div>
<div align="center"> 
<h1>Section 5. Express Advanced Topics</h1>
 <hr style="color: black;">
 </div>

<br>

<h3>1) Middleware.</h3>
<div>
<pre>
    Code: 
    See comments -> [_branch:5-1@index.js_]('#')
    Middleware is a function that takes the current request object being passed through the <b>Request Processing Pipeline</b> -
    and either returns the response object or returns the next middleware function in the pipeline. 
    Note: The middleware can be used to make changes and or use the data from the request object. 


</pre>
</div>