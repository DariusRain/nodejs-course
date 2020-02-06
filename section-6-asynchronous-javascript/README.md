<p>
Darius Rain <br>
Asynchrounous Javascript
</p>
<hr>
<br>
<h3>1) <a href="https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Synchronous_and_Asynchronous_Requests">Synchronous & Asynchronous Requests</a>.</h3>
<div>
    <pre>
    See example -> <a href="https://github.com/DariusRain/nodejs-restful-apis/blob/6-1-synchronous-vs-asynchronous-vid-1/section-6-asynchronous-javascript/README.md">branch:6-1@async-demo</a>
    Synchronous: 
        When code is executed synchronously it is in order
        of line by line. So even when timeful events occur 
        it waits until that event is finnished to 
        proceed the next line of code. (Blocking)
    <br>
    Asychronous: 
        When code is executed asynchronously it is in order
        of line by line but the code proceeds even when timeful
        events occur. So when the final line of code is done,
        then it checks again if it is finish if not then the
        eventloop will keep checking during runtime or return
        an error if timer is set.
    <br>
    Asynchronous javascript is commonly used to handle tasks that
    require fetching data from a database or API, or timeful tasks
    that you dont want blocking the rest of your code.
    </pre>
</div>
<br>
<h3>2) Asynchronous Patterns.</h3>
<div>
    <pre>
        In asynchronous code you will see a pattern of the use
        of callbacks, promises and async/await with try catch.
        These are all methods of handling asynchronous behavior 
        in your coding enviroment.
        <br>
        See example of why we need these methods -> <a href="https://github.com/DariusRain/nodejs-restful-apis/blob/6-2-asynchronous-patterns-vid-2/section-6-asynchronous-javascript/README.md">branch:6-2@index.js</a>
    </pre>
</div>
<br>
<h3>3) <a href="https://developer.mozilla.org/en-US/docs/Glossary/Callback_function">Callbacks</a>.</h3>
<div>
    <pre>
        See code & comments <a href="https://github.com/DariusRain/nodejs-restful-apis/blob/6-3-callbacks-vid-3/section-6-asynchronous-javascript/async-demo/index.js">branch:6-3@async-demo/inddex.js</a>
        Callbacks are functions added as parameters to functions.
        Callbacks can be predefined then passed as a parameter or
        on the spot with anonymous functions -> '() => {...}'.
        <br>
            Example:
                function getUser(id, callback) {
                    //Statements handling 'passedValueOfUser'
                    callback(passedValueOfUser)
                }
                getUser(3, (user) => console.log('User:' + user)) //user = passedValueOfUser
        <br>
        In asynchronous javascript you use callbacks as parameters
        to log or execute values once the asynchronous operation is
        complete, so values dont turn out to be 'undefined'.
    </pre>
</div>
<br>
<h3>4) <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise">Promises.</a></h3>
<div>
    <pre>
        Promises are ar used to hold the value of a pending asynchronous operation
        Promises respond with either a 'resolve()' or 
        'reject()' callback function's value.    
        <br>
            Example:
               const promise = new Promise((resolve, reject) => {
                   resolve(1);
                   reject(new Error('message'));
               })
                promise
                    .then(result => console.log('Result:', result))
                    .catch(error => console.log('Error:', error.message))
    </pre>
</div>
<br>
<h3>5) Converting Callbacks Into Promises.</h3>
<div>
    <pre>
        Convert the callbacks (section 3).
        See code <a href="https://github.com/DariusRain/nodejs-restful-apis/blob/6-5-replacing-callbacks-w-promises-vid-7/section-6-asynchronous-javascript/async-demo/index.js">branch:6-5@async-demo/index.js</a>
    </pre>
</div>
<br>
<h3>6)<a href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await">async & await</a> with <a hrerf="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch">try & catch</a></h3>
<div>
    <pre>
        Async and await are only necessary to use when an asynchronous task is happening, so try and catch can be used at any time.
        Try and catch is handy to handle potential errors that may occur in the try block. It is similar ti .then and .catch but the diference is
        you can add the code in try and catch block rather than chaining '.then().then().catch()' you can just write try {...} catch (err) {...}.
        The try block executes first in a try catch statement and executes the cathc block if a error occurs. 
        Try and catch also comes with a finally syntax, all that does is execute the code within its block no matter if an error is thrown ir not.
    </pre>
</div>