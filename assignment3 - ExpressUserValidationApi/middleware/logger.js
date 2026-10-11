// Logs incoming requests for the user API.
function logger(req,res,next) {
    console.log(req.method, req.url);
    next();
}
module.exports=logger;
