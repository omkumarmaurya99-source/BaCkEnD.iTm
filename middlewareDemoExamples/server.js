// Starts the middleware demonstration server.
const express = require('express');
const PORT=3000;
const app = express();

app.use(express.json());
app.get('/', (req, res) => {
    res.send('Middleware demonstration server is running');
});

app.listen(PORT, () => {
    console.log(`server running on ${PORT}`)
})