const express = require("express");
const app = express();

require("dotenv").config();
PORT = process.env.PORT || 4000;

// TODO set up server connection

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`)
});