// import express module
const express = require('express');

// create an instance of express
const app = express();

// set the port, default to 3000 if environment variable is not set
const PORT = process.env.PORT || 3000;

// create a get route to handle query strings
app.get('/get', (req, res) => {
    // log the query string parameters to the console
    console.log(req.query);
    // send a response back to the client
    res.send('Query string received');
});

// handle 404 errors for undefined routes
app.use((req, res) => {
    // set status code to 404 and send a not found message
    res.status(404).send('404 - Not Found');
});

// start the server and listen on the specified port
app.listen(PORT, () => {
    // log a message to the console once the server starts successfully
    console.log(`Server is running on port ${PORT}`);
});
