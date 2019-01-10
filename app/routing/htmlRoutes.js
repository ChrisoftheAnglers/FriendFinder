// Dependencies
var router = require("express").Router();
var path = require("path");

// Routes
router.get("/survey", function(req, res) {
     //Join relative path with __dirname (returns current dir absolute) for correct absolute path
    res.sendFile(path.join(__dirname, "../public/survey.html"));
})

router.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
})

// Export this router to the server.js
module.exports = router;