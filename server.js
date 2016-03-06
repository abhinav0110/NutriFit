var apiai = require('apiai');
var express = require('express');
var app = express();
// API.AI Connector (Client Key, Sub Key)
var api = apiai("7b0c3ff1e4584aba9b08728e35debff6", 
"68d7a43e-c1bb-4ded-a97f-a6c51a2ffbec");


var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(express.static(__dirname + '/'));


app.get('/',function(req,res){
    res.end();
});


app.post('/', function (req, res) {
    console.log(req.body.input);
    var textResponse = {};
    var responses;
	var request = api.textRequest(req.body.input);
 
	request.on('response', function(response) {
    	console.log(response);
    	var objects = response.result.parameters;
    	if(objects.Food_eaten != undefined){
    		textResponse.activity = objects.Food_eaten;
 		if (objects.number != "") {
    			textResponse.number = objects.number;
 		}
		else {
			textResponse.number = "1";
		}
    	}
    	else if(objects.Food_option != undefined){
    		textResponse.activity = objects.Food_option;
    		textResponse.text = objects.Food;
	}
	else if(objects.Food_toeat != undefined){
		textResponse.activity = objects.Food_toeat;
	}
	else if(objects.Food_log != undefined){
		textResponse.activity = objects.Food_log;
	}
		textResponse.intent = response.result.action;
		console.log("send: " +response.result.action);
	});

 
	request.on('error', function(error) {
    	console.log(error);
	});
 
	request.end();
	setTimeout(function() {
		console.log(textResponse);
		res.json(textResponse);
		
	}, 1000);
    
});


app.listen(8023, function(){
  console.log('Listening on port 8023'); //Listening on port 8888
});
