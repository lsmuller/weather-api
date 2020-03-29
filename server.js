var express = require("express");
var bodyParser = require("body-parser");

var app = express();
app.use(bodyParser.json());

// Initialize the app.
var server = app.listen(process.env.PORT || 8080, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
});

// Generic error handler used by all endpoints.
function handleError(res, reason, message, code) {
    console.log("ERROR: " + reason);
    res.status(code || 500).json({"error": message});
}

var cities = [
    { Name: "Vancouver"},
    { Name: "PortoAlegre"},
    { Name: "Montreal"},
    { Name: "SaoPaulo"}
];

var conditions = [
    { Name: "Clear"},
    { Name: "Cloudy"},
    { Name: "Rain"},
    { Name: "Thunderstorm"},
    { Name: "Snow"},
    { Name: "Mist"}
];

app.get("/api/weather", function(req, res) {
    console.log("Fetching weather information");
    res.status(200).json({
        date: new Date(new Date().toUTCString()),
        city: cities[0].Name,
        temperature: 22.0,
        scale: "celsius",
        condition: conditions[0].Name
    });
});