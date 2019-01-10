// Dependencies (including our script with data)
var router = require("express").Router();
var friends = require("../data/friends");

// Routes
router.get("/friends", function(req, res) {
// TO DO: Output JSON array with friend objects
    res.json(friends);
})

router.post("/friends", function(req, res) {
    // Check for errors
// TO DO: Get survey results and use them to match the user to the correct friend
    // First get submitted result from the body of the survey page (gotten through submit)
    // Next, (assuming the format of the information input is correct) begin comparing the user's answers to listed friends
    // and calculate the total score differences to match them (lowest difference is best match)
    console.log(req.body);
})

// Export router
module.exports = router;