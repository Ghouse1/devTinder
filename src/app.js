const express = require("express");

const app = express();

const { adminAuth, userAuth } = require("./middleware/auth")

app.use("/admin", adminAuth);
app.use("/user", userAuth);

app.get("/admin/getAllData", (req, res) => {
    res.send({
        statuscode: 200,
        message:"Admin getAllData fecthed succesfully"});
});

app.get("/admin/getDeleteData", (req, res) => {
    res.send({
        statuscode: 200,
        message:"Admin getDeleteDate deleted succesfully"})
});

app.get("/user/getAllUserData", (req, res) => {
    res.send({
        statuscode: 200,
        message: "user getAllUserData fetched succesfully"});
});

app.listen(3000, (req, res) => {
    console.log("listening to the port 3000");
});