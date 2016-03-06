var apiai = require('apiai');
var express = require('express');
var app = express();
// API.AI Connector (Client Key, Sub Key)
var api = apiai("7b0c3ff1e4584aba9b08728e35debff6",
    "68d7a43e-c1bb-4ded-a97f-a6c51a2ffbec");


var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(express.static(__dirname + '/'));


app.get('/', function(req, res) {
    res.end();
});


app.post('/', function(req, res) {
    console.log(req.body.input);
    var textResponse = {};
    var responses;
    var request = api.textRequest(req.body.input);

    request.on('response', function(response) {
      console.log(response);

      // Stores Parameters Received from API.AI
      var params = response.result.parameters;
      if(params.Food != undefined){	// If Food is Defined...
      	console.log("Successfully identified food!"); // State success
      	console.log(params.Food);	// Print out Detected Food
      	textResponse.food = params.Food;	// Push Food data to food variable in return response to end user
      	textResponse.number = params.number; // Push number of food data to number variable in return response to end user
      }

      // Stores Action Parsed by API.AI from User Input String
      var action = response.result.action;
      if(action != undefined)	// If action is Defined...
      	console.log("Intent Successfully Registered: " + action); // State success
      if(action == "Food_eaten") // If action was 'Food_eaten'
      	textResponse.intent = "Food_eaten";	// Push respective action to textResponse to end user
      else if (action == "Food_option")
      	textResponse.intent = "Food_option";	// Same with this
      else if (action == "Food_toeat")
      	textResponse.intent = "Food_toeat";	// Same with this
      else
      	console.log("Intent Registration Unsuccessful! :(");
    });


    request.on('error', function(error) {
        console.log(error);
    });

    request.end();
    setTimeout(function() {
        console.log(textResponse);
        res.json(textResponse);

    }, 2000);

});


app.listen(8023, function() {
    console.log('Listening on port 8023'); //Listening on port 8888
});