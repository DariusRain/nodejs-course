<p>
Darius Rain <br>
Section 6: Asynchrounous Javascript
</p>
<hr>
<br>
<h3>1) Synchronous V.S. Asynchronous.</h3>
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
<h3>3) Callbacks.</h3>
<div>
    <pre>
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
