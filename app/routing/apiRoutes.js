// Dependencies (including our script with data)
var router = require("express").Router();
var friends = require("../data/friends");

// Routes
router.get("/friends", function(req, res) {
    res.json(friends);
})

router.post("/friends", function(req, res) {
    // Check for errors
// TO DO: Get survey results and use them to match the user to the correct friend
    // First get submitted result from the body of the survey page (gotten through submit)
    // Next, (assuming the format of the information input is correct) begin comparing the user's answers to listed friends
    // and calculate the total score differences to match them (lowest difference is best match)
    var totalDifferenceArray = []; // Array of total differences between friends and user (will have same index as friends)
    var user = req.body;
    // Parse the user 'scores' array to get proper integers
    for (x=0; x<user.scores.length; x++) {
        user.scores[x] = parseInt(user.scores[x]);
    }
    for (i=0; i<friends.length; i++) {
        totalDifferenceArray[i] = 0;
        for(j=0; j<friends[i].scores.length; j++) {
            // Take the absolute value 
            totalDifferenceArray[i] += Math.abs(user.scores[j] - friends[i].scores[j]); 
        }
    }
    var minIndex = totalDifferenceArray.indexOf(Math.min(...totalDifferenceArray));
    friends.push(req.body); // Push user onto friends array AFTER the calculations are finished
    res.json(friends[minIndex]); // Send the info of the best match to the survey page modal
})

// Export router
module.exports = router;