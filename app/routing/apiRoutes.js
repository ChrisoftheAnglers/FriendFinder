// Dependencies
var router = require("express").Router();
var path = require("path");

// Routes
router.get("/friends", function(req, res) {
// TO DO: Output JSON array with friend objects
    var friendPath = (path.join(__dirname, "../data/friends.js"));
    res.sendFile(friendPath);
})

/* router.post("/friends", function(req, res) {
// TO DO: Add friend to JSON array of friend objects
}) */

// Export router
module.exports = router;