const express = require('express');

const app = express();

app.use("/test", (req, res) => {
    res.send("Testing in dev");
});

app.use("/dev", (req, res) => {
    res.send("Namaste Javascript");
});

app.use((req, res) => {
    res.send("Hello World!!!!");
});

app.listen(7777, () => {
    console.log("Listening to the port 7777....");
});



