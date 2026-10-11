// Logs requests for the user management API.
const logger = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
};

module.exports = logger;
