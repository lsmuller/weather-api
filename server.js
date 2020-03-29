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
    { name: "Vancouver"},
    { name: "PortoAlegre"},
    { name: "Montreal"},
    { name: "SaoPaulo"}
];

var conditions = [
    { name: "Clear"},
    { name: "Cloudy"},
    { name: "Rain"},
    { name: "Thunderstorm"},
    { name: "Snow"},
    { name: "Mist"}
];

function handleError(res, reason, message, code) {
    console.log("ERROR: " + reason);
    res.status(code || 500).json({"error": message});
}

app.get("/api/weather", function(req, res) {
    console.log("Fetching weather information");

    let city = req.query.city;
    console.log("City: " + city);

    var found = cities.find(element => element.name === city);
    if (found == undefined) {
        handleError(res, "City not registered", "City not registered");
        return;
    }

    let condition = conditions[Math.floor(Math.random() * conditions.length)].name;
    console.log("Condition: " + condition);

    let temperature = (Math.random() * 50) - 22; 
    console.log("Temperature: " + temperature);

    res.status(200).json({
        date: new Date(new Date().toUTCString()),
        city: city,
        temperature: temperature.toFixed(2),
        scale: "celsius",
        condition: condition
    });
});