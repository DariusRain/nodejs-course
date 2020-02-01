//Darius Rain
//Section 5.2: Custom middleware (Last Change)
//See comments abot middleware in the index.js on branch 5-2


function log(req, res, next){
    console.log('Logging');
    next();
}

module.exports = log;