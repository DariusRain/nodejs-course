<p>
Darius Rain <br>
Section 6: Asynchrounous Javascript
</p>
<hr>
<br>
<h3>1) Synchronous Vs Asynchronous.</h3>
<div>
    <pre>
    See example <a href="https://github.com/DariusRain/nodejs-restful-apis/blob/master/section-6-asynchronous-javascript/async-demo/index.js">branch:6-1@async-demo</a>
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
