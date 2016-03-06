$(document).ready(function() {
    console.log("Loaded webpage!");
});
var unit;

var name = "";
var age = 0;
var gender = "";
var weight = 0;
var exer = 0;
var fat=0;
var prot=0;
var carb=0;
var c=1;
var cal=0;
var min=0;
var per_fat = 0;
var per_carb = 0;
var per_prot = 0;
var cal_eaten = 0;


var setCal = function(){
   if(gender==Male){
        if(exer==0){min=1.3;}
        else if(exer==1){min=1.6;}
        else if(exer==2){min=1.7;}
        else if(exer==3){min=2.1;}
        if(age<3){
                cal=60*min*weight-30;
        }

        else if(age>=3 && age<10){
                cal=23*min*weight+505
        }

        else if(age>=10 && age<18){
                cal=18*min*weight+659;
        }
        else if(age>=18 && age<30){
                cal=15*min*weight+692;
        }
        else if(age>=30 && age<60){
                cal=11.4*min*weight+873;
        }
        else if(age>=60){
        cal=11.7*min*weight+587;
        }
    }   

   else if(sex==Female){
    if(exer==0){min=1.3;}
    else if(exer==1){min=1.5;}
    else if(exer==2){min=1.6;}
    else if(exer==3){min=1.9;}
    if(age<3){
        cal=58*min*weight-31;
    }
    
    else if(age>=3 && age<10){
        cal=20*min*weight+485
    }

    else if(age>=10 && age<18){
        cal=13*min*weight+692;
    }
    else if(age>=18 && age<30){
        cal=15*min*weight+486;
    }
    else if(age>=30 && age<60){
        cal=8*min*weight+845;
    }
    else if(age>=60){
        cal=9*min*weight+658;
    } 
  }  
}
/*
function calc() //function gets called every time user says a food article
{
  for(int i=0;i<every_tuple;i++){
    if(count_from_voice!=1) {
        c=count_from_voice;
    }
    
    if(data.name==input_from_voice)
    {   
        cal_eaten+=c*(data.fat*9+data.prot*4+data.carb*4);
        fat+=c*data.fat*9;
        prot+=c*data.prot*4;
        carb+=c*data.carb*4;
    }
  }
  per_fat=(fat/cal_eaten);
  per_prot=(prot/cal_eaten);
  per_carb=(carb/cal_eaten);
}

function op()
{   if(per_fat<.28){
    //Print eat more fat
       var val=(.30-per_fat);
       var Eat=val*cal_eaten;
       //Display to screen Eat
    for(int i=0;i<every_tuple;i++){
        //"Here are some suggestions"
        if(data.cal==Eat){
            print data.name;
            break;
        }
    }
    }
    if(per_fat>.32){
        //print eat less fat
    var val=(per_fat-0.30);
       var Eat=val*cal_eaten;
       //Display to screen Eat
    for(int i=0;i<every_tuple;i++){
        //"Here are some suggestions"
        if(data.cal==Eat){
            print data.name;
            break;
       }
    }
    }
    if(per_prot>.23){
        //print eat less prot
    var val=(per_prot-0.20);
       var Eat1=val*cal_eaten;
       //Display to screen Eat
    for(int i=0;i<every_tuple;i++){
        //"Here are some suggestions"
        if(data.cal==Eat1){
            print data.name;
            break;
        }
    }
    }
    if(per_prot<.19){
        //print eat more prot
    var val=(0.20-per_prot);
       var Eat1=val*cal_eaten;
       //Display to screen Eat
    for(int i=0;i<every_tuple;i++){
        //"Here are some suggestions"
        if(data.cal==Eat1){
            print data.name;
            break;
        }
    }
    }
    if(per_carb<.48){
        //print eat more carb
    var val=(0.50-per_carb);
       var Eat2=val*cal_eaten;
       //Display to screen Eat
    for(int i=0;i<every_tuple;i++){
        //"Here are some suggestions"
        if(data.cal==Eat2){
            print data.name;
            break;
        }
    }
    }
    if (per_carb>.51){
        //print eat less carb
    var val=(per_carb-0.50);
       var Eat2=val*cal_eaten;
       //Display to screen Eat
    for(int i=0;i<every_tuple;i++){
        //"Here are some suggestions"
        if(data.cal==Eat2){
            print data.name;
            break;
        }
    }
    }
    if(cal_eaten>(cal+150)){
        //Print difference cal_eaten-cal Eg. Eating x calories excess
    }
    if(cal_eaten>(cal-150)){
        //Print difference cal_eaten-cal Eg. Eating x calories less
    }

}
*/

var caloriesNeeded = function(neededcalories, calories, 
			      neededfat, fat, 
			      neededprotein, protein, 
			      neededcarbs, carbs){
        calories = neededcalories - calories;
	fat = neededfat - fat;
	protein = neededprotein - protein;
	carbs = neededcarbs - carbs;
	return true;
}

var caloriesOption = function(calories){
	
	return true;
}

var caloriesShould = function(calories, food){
	return true;
}


// var name;

var caloriesBurn = 0;

updateCalories = function(calories){
	$("#calories").text(calories);
	$.apply
}

var log = [];

var leanSchedule = [
{
 time: "7 am",
 activity: "Breakfest, egg and wheat bread"
},
{
 time: "9 am",
 activity: " 30 mintue Run"
},
{
 time: "11 am",
 activity: "Cycling Club"

},{
 time: "12 pm",
 activity: "Lunch, chicken and caesar salad"
},
{
 time: "3 pm",
 activity: "Lean Weight Training, core and legs"
},{
 time: "4 pm",
 activity: "Snack, fruits"
},
{
 time: "7 pm",
 activity: "Dinner, salmon with steam vegetables"


},{
 time: "9 am",
 activity: "Sleep"
}];

var currentUser;

continueCoach = function(phrase, type){
	say(phrase);

    setTimeout(function() {
        window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition || null;
        if (window.SpeechRecognition == null) {
            console.log('empty');
        } else {
            var recognizer = new window.SpeechRecognition();
            recognizer.continuous = false;
            var text;
            var name;
            recognizer.onresult = function(event) {
                for (var i = event.resultIndex; i < event.results.length; i++) {
                    if (event.results[i].isFinal) {
                        text = event.results[i][0].transcript;
                    } else {
                        text += event.results[i][0].transcript;
                    }
                }
                var splitScript = event.results[0][0].transcript.split(" ");
                console.log(text);
                $.ajax({
                    type: "POST",
                    url: "/",
                    data: {
                        input: text
                    },
                    success: function(data) {
                        console.log(data);
                        //responsiveVoice.speak("You did " + data.number + data.activity, "UK English Female");
                        //console.log(data.activity);
                        var logData = {};
                        switch (data.intent) {
                            case 'name.save':
				if (type == "gender"){
                                   try{
				       gender = splitScript[splitScript.length-1];
				   }
				  catch(err) {
				       continueCoach("Please only say Male or Female", "gender");
				   }
				}
				else if (type == "age"){
				   try{
					age = parseInt(splitScript[splitScript.length-1]);
				   }
				   catch(err){
				       continueCoach("Please only say a number", "age");
			           }
				}
				else if (type == "weight"){
				   try{
					weight = parseInt(splitScript[splitScript.length-1]);
				   }
				   catch(err){
                                       continueCoach("Please only say a number", "weight");
                                   }
				}
				else if (type == "fitness"){
				   exer = 2;
				}
                                responsiveVoice.speak("I have updated your" + type, "UK English Female");
                                break;
                            default:
                                if (type == "gender"){
                                   try{
                                       gender = splitScript[splitScript.length-1];
                                   }
                                  catch(err) {
                                       continueCoach("Please only say Male or Female", "gender");
                                   }
                                }
                                else if (type == "age"){
                                   try{
                                        age = parseInt(splitScript[splitScript.length-1]);
                                   }
                                   catch(err){
                                       continueCoach("Please only say a number", "age");
                                   }
                                }       
                                else if (type == "weight"){
                                   try{
                                        weight = parseInt(splitScript[splitScript.length-1]);
                                   }
                                   catch(err){
                                       continueCoach("Please only say a number", "weight");
                                   }
                                }
                                else if (type == "fitness"){
                                   exer = 2;
                                }
                                responsiveVoice.speak("I have updated your" + type, "UK English Female");
                                break;
                        }
                    }
                });

            };
            recognizer.onerror = function(error) {
                console.log(error);
		continueCoach(phrase, type);
            };
            try {
                recognizer.start(); // SUCCESS
            } catch (ex) {
                console.log(ex.message);
            }
        }
    }, 5500);
}
startCoach = function() {
    $("#intro").fadeOut();
    $("#app").fadeIn();
    $("#demo-canvas").fadeIn();
    $(".app-content").fadeIn();
    $("#line").fadeIn();
    $("#bg").addClass("blurred");

    // setTimeout(function(){
    	say("Hello! I am NutriFit and I will keep you healthy. What is your name?");
    // }, 1000);

    setTimeout(function() {
        window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition || null;
        if (window.SpeechRecognition == null) {
            console.log('empty');
        } else {
            var recognizer = new window.SpeechRecognition();
            recognizer.continuous = false;
            var text;
            var name;
            recognizer.onresult = function(event) {
                for (var i = event.resultIndex; i < event.results.length; i++) {
                    if (event.results[i].isFinal) {
                        text = event.results[i][0].transcript;
                    } else {
                        text += event.results[i][0].transcript;
                    }
                }
                var splitScript = event.results[0][0].transcript.split(" ");
                console.log(text);
                $.ajax({
                    type: "POST",
                    url: "/",
                    data: {
                        input: text
                   },
                    success: function(data) {
                        console.log(data);
                        //responsiveVoice.speak("You did " + data.number + data.activity, "UK English Female");
                        //console.log(data.activity);
                        var logData = {};
                        switch (data.intent) {
                            case 'name.save':
                                currentUser = splitScript[splitScript.length-1];
                                responsiveVoice.speak("Hi " + currentUser + ", it's nice to see you!", "UK English Female");
                                init_firebase(currentUser);
				continueCoach("May I ask what gender are you?", "gender");
				continueCoach("How old are you?", "age");
				continueCoach("How much do you weight?", "weight");
				continueCoach("How active are you? Light, Moderate, Heavy?", "fitness");
                                setCal();
				break;
                            default:
                                currentUser = splitScript[splitScript.length-1];
                                responsiveVoice.speak("Hi " + currentUser + ", it's nice to see you!", "UK English Female");
                                init_firebase(currentUser);
                                continueCoach("May I ask what gender are you?", "gender");
                                continueCoach("How old are you?", "age");
                                continueCoach("How much do you weight?", "weight");
                                continueCoach("How active are you? Light, Moderate, Heavy?", "fitness");
                                setCal();
				break;
                        }
                    }
                });

            };
            recognizer.onerror = function(error) {
                console.log(error);
		startCoach();
            };
            try {
                recognizer.start(); // SUCCESS
            } catch (ex) {
                console.log(ex.message);
            }
        }
    }, 5500);
}

say = function(speech) {
    responsiveVoice.speak(speech, "UK English Female");
}


getVoice = function() {
		// var foo=new Sound("./res/boop.mp3",100,true);
		// foo.start();
		// foo.stop();
		// foo.start();
		// foo.init(2000,false);
		// foo.remove();

    setTimeout(function() {
        window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition || null;
        if (window.SpeechRecognition == null) {
            console.log('empty');
        } else {
            var recognizer = new window.SpeechRecognition();
            recognizer.continuous = false;
            var text;
            recognizer.onresult = function(event) {
                for (var i = event.resultIndex; i < event.results.length; i++) {
                    if (event.results[i].isFinal) {
                        text = event.results[i][0].transcript;
                    } else {
                        text += event.results[i][0].transcript;
                    }
                }
                console.log(text);
                messagesRef.push({
                    name: currentUser,
                    text: text
                });
                var crystalresponse;
                $.ajax({
                      type: "POST",
                      url: "/",
                      data: { input: text },
                      success: function(data){
                          console.log(data);
                          //responsiveVoice.speak("You did " + data.number + data.activity, "UK English Female");
                          //console.log(data.activity);
                          var logdata = {};
			  switch (data.intent) {

                              case 'Food_eaten':
                              	 crystalresponse = "Great, I added that you have eaten " + data.number + data.activity + " to your log";
                                  responsiveVoice.speak(crystalresponse, "UK English Female");
                                  var key2 = dataset.key(data.activity);
				  prot += key2["Protein"];
				  fat += key2["Lipid_Tot"];
				  carb += key2["Carbohydrt"];
				  caloriesBurn = caloriesRep(caloriesBurn,data.number);
                                  logData.activity = data.activity;
                                  logData.count = data.number;
                                  logData.date = new Date();
                                  log.push(logData);
                                  messagesRef.push({
											                name: "Crystal",
											                text: crystalresponse
											            });
                                  break;
                              case 'Food_option':
                                  /* Change so that it is dependent on whether calories option return true or false 
                                  crystalresponse = "Great, I added " + data.activity + "for" + data.duration.amount +unit+ " to your log";
                                  responsiveVoice.speak(crystalresponse , "UK English Female");
                                  caloriesBurn = caloriesTime(caloriesBurn,data.duration.amount);
                                  logData.activity = data.activity;
                                  logData.count = data.duration.amount + ' ' + unit;
                                  logData.date = new Date();
                                  log.push(logData);
                                  messagesRef.push({
											                name: "Crystal",
											                text: crystalresponse
											            });*/
                                  break;

                              case 'Food_toeat': /* dependent on what food is returned
                              		crystalresponse = "You should eat" + caloriesShould(insertname);
                                  responsiveVoice.speak(crystalresponse, "UK English Female");
                                  messagesRef.push({
											                name: "Crystal",
											                text: crystalresponse
											            }); */
                                  break;
                             case 'Print_log':/* Implement log printing for doctors
                                    var catString = leanSchedule[0].time +" "+ leanSchedule[0].activity +".";
                                    for(var i = 1; i < leanSchedule.length; i++){
                                      catString =  catString+leanSchedule[i].time +" "+ leanSchedule[i].activity +".";
                                    }
                                   	crystalresponse = "Here an overview of your day. " + catString;

                                    responsiveVoice.speak(crystalresponse, "UK English Female");
                               	
                                  messagesRef.push({
											                name: "Crystal",
											                text: crystalresponse
											            });
                               		break;
                               case 'log':
                               break;
                              default:
                                  messagesRef.push({
											                name: "Crystal",
											                text: "Sorry I didn't get that"
											            });
                                  responsiveVoice.speak("Sorry I didn't get dat" , "UK English Female"); */
                                  break;
                          }
                      }
                  });
                
            };
            recognizer.onerror = function(error) {
                console.log(error);
            };
            try {
                recognizer.start(); // SUCCESS
            } catch (ex) {
                console.log(ex.message);
            }
        }
    }, 100);
	updateCalories(caloriesBurn);
}


var messagesRef;

// REGISTER DOM ELEMENTS
var messageField = $('#messageInput');
var nameField = $('#nameInput');
var messageList = $('#messages');
var key;

//Firebase
// CREATE A REFERENCE TO FIREBASE
init_firebase = function(username) {
    console.log(username);
    $("#username").text(username);
    messagesRef = new Firebase('https://nutrifit.firebaseio.com/' + username);
    console.log("Attempted to connect to https://nutrifit.firebaseio.com/" + username);
    messagesRef.push({
    	name: "NutriFit",
    	text: "Hi " + currentUser + ", it's nice to see you!"
    });
    messagesRef.push({
    	name: "NutriFit",
    	text: "Say Things Like 'I ate a cheeseburger', 'Should I eat roast pork?', 'What should I eat?', 'NutriFit, give me my log'"
    });

    $("#calories").text(caloriesBurn);
    $("#crystalSuggest").text("messagesRef".crystalSuggest);

    // Add a callback that is triggered for each chat message.
    messagesRef.limitToLast(10).on('child_added', function(snapshot) {
        //GET DATA
        var key = snapshot.key();
        var data = snapshot.val();
        var username = data.name || "anonymous";
        var message = data.text;

        //CREATE ELEMENTS MESSAGE & SANITIZE TEXT
        var messageElement = $("<li id=" + key + " onClick=removeMessage(&#39;" + key + "&#39;)>");
        var nameElement = $("<strong class='username'></strong>")
        nameElement.text(username);
        messageElement.text(message).prepend(": ").prepend(nameElement);

        //ADD MESSAGE
        messageList.append(messageElement)

        //SCROLL TO BOTTOM OF MESSAGE LIST
        // messageList[0].scrollTop = messageList[0].scrollHeight;
        // $("#messageStore").animate({
        //     scrollTop: $('#messageStore')[0].scrollHeight
        // }, 1000);
    });

    removeMessage = function(key) {
        if (window.confirm("Are you sure you want to delete this message?")) {
            var keyRef = new Firebase('https://crystalcoach.firebaseio.com/john' + key);
            keyRef.remove();
            $("#" + key).hide();
        }
    };

    removeAll = function() {
        if (window.confirm("Are you sure you want to delete the entire chat?")) {
            messagesRef.remove();
            $('#messages').empty();
        }
    };
}

// LISTEN FOR KEYPRESS EVENT
messageField.keypress(function(e) {
    if (e.keyCode == 13) {
        //FIELD VALUES
        var username = nameField.val();
        var message = messageField.val();
        if(messagesRef){
	        //SAVE DATA TO FIREBASE AND EMPTY FIELD
	        messagesRef.push({
	            name: username,
	            text: message
	        });
	        messageField.val('');
        } else {
        	alert("Please sign into CrystalCoach first!");
        }
    }
});

// Sound Function for playing boop
function Sound(source,volume,loop)
{
    this.source=source;
    this.volume=volume;
    this.loop=loop;
    var son;
    this.son=son;
    this.finish=false;
    this.stop=function()
    {
        document.body.removeChild(this.son);
    }
    this.start=function()
    {
        if(this.finish)return false;
        this.son=document.createElement("embed");
        this.son.setAttribute("src",this.source);
        this.son.setAttribute("hidden","true");
        this.son.setAttribute("volume",this.volume);
        this.son.setAttribute("autostart","true");
        this.son.setAttribute("loop",this.loop);
        document.body.appendChild(this.son);
    }
    this.remove=function()
    {
        document.body.removeChild(this.son);
        this.finish=true;
    }
    this.init=function(volume,loop)
    {
        this.finish=false;
        this.volume=volume;
        this.loop=loop;
    }
}

var dataset = {"Cheddar Cheese":{
    "Energ_Kcal": 403,
    "Protein": 24.9,
    "Lipid_Tot": 33.14,
    "Carbohydrt": 1.28,
    "Sugar_Tot": 0.52
  },
    "Roasted Turkey":{
    "Energ_Kcal": 208,
    "Protein": 28.1,
    "Lipid_Tot": 9.73,
    "Carbohydrt": 0,
    "Sugar_Tot": 0,
    "Sodium": 68,
    "Cholestrl": 82,
  },
    "Fried Chicken":{
    "Energ_Kcal": 289,
    "Protein": 22.54,
    "Lipid_Tot": 17.35,
    "Carbohydrt": 9.42,
    "Sugar_Tot": 0,
    "Sodium": 292,
    "Cholestrl": 87,
  },
    "Apple":{
    "Energ_Kcal": 52,
    "Protein": 0.26,
    "Lipid_Tot": 0.17,
    "Carbohydrt": 13.81,
    "Sugar_Tot": 10.39,
    "Sodium": 1,
    "Cholestrl": 0,
  },
    "Banana":{
    "Energ_Kcal": 89,
    "Protein": 1.09,
    "Lipid_Tot": 0.33,
    "Carbohydrt": 22.84,
    "Sugar_Tot": 12.23,
    "Sodium": 1,
    "Cholestrl": 0,
  },
    "Blueberries":{
    "Energ_Kcal": 57,
    "Protein": 0.74,
    "Lipid_Tot": 0.33,
    "Carbohydrt": 14.49,
    "Sugar_Tot": 9.96,
    "Sodium": 1,
    "Cholestrl": 0,
  },
    "Orange Juice":{
    "Energ_Kcal": 45,
    "Protein": 0.7,
    "Lipid_Tot": 0.2,
    "Carbohydrt": 10.4,
    "Sugar_Tot": 8.4,
    "Sodium": 1,
    "Cholestrl": 0,
  },
    "Pear":{
    "Energ_Kcal": 58,
    "Protein": 0.38,
    "Lipid_Tot": 0.12,
    "Carbohydrt": 15.46,
    "Sugar_Tot": 9.8,
    "Sodium": 1,
    "Cholestrl": 0,
  },
    "Roast Pork":{
    "Energ_Kcal": 273,
    "Protein": 26.83,
    "Lipid_Tot": 17.61,
    "Carbohydrt": 0,
    "Sugar_Tot": 0,
    "Sodium": 60,
    "Cholestrl": 94,
  }};
