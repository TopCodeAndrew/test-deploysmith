const express = require("express");

const path = require("path");

const app = express();

console.log("HERE: ", path.join(__dirname, "../index.html"));

// res.sendFile is expecting an absolute file path to get to the file to be sent
// path.join provides that path by giving the current directory and where the file to be sent is in relation to the current directory
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../index.html"));
});

// This will get the PORT variable from Heroku. However, if one isn't assigned (ex. when we are testing locally) it will use port 4005.
const port = process.env.PORT || 4005;

app.listen(port, () => {
    console.log(`Listening on freakin' port numbero ${port}`);
});
