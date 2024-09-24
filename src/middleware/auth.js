const adminAuth =  (req, res) => {
    console.log("Admin auth is getting checked");
    const token = "xyz";
    const isAuth = token === "xyz";

    if(!isAuth) {
        res.status(401).send("Unauthorized request")
    } else {
        next();
    }
};


const userAuth = (req, res, next) => {
    console.log("UserAuth data fetched succesfully");
    const token = "abc";
    const isUser = token === "abc";

    if(!isUser) {
        res.status(401).send("User Unauthorized");
    } else {
        next(); 
    }
}

module.exports = {
    adminAuth,
    userAuth
}