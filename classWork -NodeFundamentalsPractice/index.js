// Entry point for Node fundamentals practice.
const http = require("http");
const PORT = 3000;
const server = http.createServer((req, res) => {
    if (req.url == "/") {
        res.end("welcome to Node.js");
    } else {
        res.statusCode = 404;
        res.end("page not found");
    }
});
server.listen(PORT, () => {
    console.log("server running on:", PORT);
});