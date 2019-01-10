// Dependencies
var express = require("express");

// Initialize app
var app = express();
var PORT = 3000;

// Set up app for JSON
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Bring in objects for routing
var htmlRouter = require("./app/routing/htmlRoutes");
var apiRouter = require("./app/routing/apiRoutes");

// Set up app routing using above objects
app.use(htmlRouter);
app.use("/api", apiRouter); // Using '/api' as the first parameter lets us define part of the route outside
                            // of the apiRouter object to include '/api' before it
                            // Ex. To get the friends JSON, the address /api/friends will be used instead of
                            // /friends, which was defined in the router

// Initialize Listeners
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});