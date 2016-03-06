// NutriFit Functions
say = function(speech) {
    responsiveVoice.speak(speech, "UK English Female");
}

startCoach = function() {
    say("Hello and welcome to NutriFit! I am FitPal, your personal nutritionist A I. What is your name?");
    setTimeout(function(){
      reqUserInfo("getName");
    }, 7000);
}

var user = {};

// Function dedicated for requesting user info including Name, Gender, Weight and Age
reqUserInfo = function(reqParam) {
    console.log(reqParam);
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
                var userVoiceInput = text.toLowercase();
                var splitScript = event.results[0][0].transcript.split(" ");
                console.log("arrive at params");
                // Get user name
                if (reqParam == "getName") 
                {                
                  console.log("Getting username...");
                  user.name = splitScript[splitScript.length - 1];
                  say("Hey there " + user.name + "!");
                  init_firebase(user.name);
                  if(getUserSessions(user.name) < 1){
                    reqUserInfo("getGender");
                  }
                } 

                // Get user gender
                else if (reqParam == "getGender") 
                {       
                  console.log("Getting user gender...");
                  if (userVoiceInput.indexOf('female') >= 0) {
                    user.gender = "female";
                  } else {
                    user.gender = "male";
                  }
                  say("Okay, got it - you are " + user.gender);
                } 

                // Get user weight
                else if (reqParam == "getWeight") 
                {       
                  console.log("Getting user weight...");
                  user.weight = callNutriFit("getWeight");
                  if (userVoiceInput.indexOf('kilograms')) {
                    systemUse = "metric";
                  } else {
                    systemUse = "imperial";
                  }
                  say("Okay, got it - you weigh " + user.weight);
                  if(systemUse == "metric")
                    say("kilograms");
                  else
                    say("imperial");
                } 

                // Get user age
                else if (reqParam == "getAge") 
                {          
                  console.log("Getting user age...");
                  user.age = callNutriFit("getAge");
                  say("Okay, got it - you are " + user.age + " years old.");
                }

                // Catch alien calls
                else
                {
                  say("I'm sorry, I don't quite understand.");
                }
            };
            recognizer.onerror = function(error) {
                console.log(error);
                say("Sorry, I didn't quite get that.");
            };
            try {
                recognizer.start();
            } catch (ex) {
                console.log(ex.message);
            }
        }
    }, 2000);
}

callNutriFit = function(userVoiceInput, param) {
  var logData = {};
  var nutrifitResponse;

  $.ajax({
    type: "POST",
    url: "/",
    data: {
      input: userVoiceInput
    },
    success: function(data) {
      console.log(data);
      switch (param) {
        case "getAge":
          age = parseInt(splitScript[splitScript.length - 1]);
          if (age == undefined){
            age = 30;
          }
          break;
      case 'Food_eaten':
        nutrifitResponse = "Great, I added that you have eaten " + data.number + data.food + " to your log";
        say();
        console.log("" + data.food);
        var key = dataset[("" + data.food)];
        console.log(dataset[("" + data.food)]);
        prot += key["Protein"]
        fat += key["Lipid_Tot"];
        carb += key["Carbohydrt"];
        calc();
        logData.food = data.food;
        logData.count = data.number;
        logData.date = new Date();
        log.push(logData);
        $("#calories").text(cal_eaten);
        messagesRef.push({
          name: "FitPal",
          text: nutrifitResponse
        });
        break;
      case 'Food_option':
        if (caloriesShould(("" + data.food))) {
            nutrifitResponse = "Great, you should eat " + data.food;
        } else {
            nutrifitResponse = "You should not eat " + data.food + " it overloads your diet."
        }
        responsiveVoice.speak(nutrifitResponse, "UK English Female");
        messagesRef.push({
            name: "Crystal",
            text: nutrifitResponse
        });
        break;

      case 'Food_toeat':
        op();
        if (returnFood == "") {
            nutrifitResponse = "There are no recommended foods."
            $("#crystalSuggest").text("" + returnFood);

        } else {
            nutrifitResponse = "You should eat" + returnFood;
        }
        responsiveVoice.speak(nutrifitResponse, "UK English Female");
        returnFood = "";
        messagesRef.push({
            name: "Crystal",
            text: nutrifitResponse
        });
        break;
      }
    }
  });
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

    $("#calories").text(cal_eaten);
    $("#nutrifitSuggest").text("messagesRef".nutrifitSuggest);

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
            var keyRef = new Firebase('https://nutrifit.firebaseio.com/john' + key);
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

var dataset = {
    "cheddar cheese": {
        "Energ_Kcal": 403,
        "Protein": 24.9,
        "Lipid_Tot": 33.14,
        "Carbohydrt": 1.28,
        "Sugar_Tot": 0.52
    },
    "roasted turkey": {
        "Energ_Kcal": 208,
        "Protein": 28.1,
        "Lipid_Tot": 9.73,
        "Carbohydrt": 0,
        "Sugar_Tot": 0,
        "Sodium": 68,
        "Cholestrl": 82,
    },
    "fried chicken": {
        "Energ_Kcal": 289,
        "Protein": 22.54,
        "Lipid_Tot": 17.35,
        "Carbohydrt": 9.42,
        "Sugar_Tot": 0,
        "Sodium": 292,
        "Cholestrl": 87,
    },
    "apples": {
        "Energ_Kcal": 52,
        "Protein": 0.26,
        "Lipid_Tot": 0.17,
        "Carbohydrt": 13.81,
        "Sugar_Tot": 10.39,
        "Sodium": 1,
        "Cholestrl": 0,
    },
    "bananas": {
        "Energ_Kcal": 89,
        "Protein": 1.09,
        "Lipid_Tot": 0.33,
        "Carbohydrt": 22.84,
        "Sugar_Tot": 12.23,
        "Sodium": 1,
        "Cholestrl": 0,
    },
    "cheeseburger": {
        "Energ_Kcal": 257,
        "Protein": 1.74,
        "Lipid_Tot": 10.33,
        "Carbohydrt": 30.49,
        "Sugar_Tot": 21.96,
        "Sodium": 17,
        "Cholestrl": 53,
    },
    "blueberries": {
        "Energ_Kcal": 57,
        "Protein": 0.74,
        "Lipid_Tot": 0.33,
        "Carbohydrt": 14.49,
        "Sugar_Tot": 9.96,
        "Sodium": 1,
        "Cholestrl": 0,
    },
    "orange juice": {
        "Energ_Kcal": 45,
        "Protein": 0.7,
        "Lipid_Tot": 0.2,
        "Carbohydrt": 10.4,
        "Sugar_Tot": 8.4,
        "Sodium": 1,
        "Cholestrl": 0,
    },
    "pear": {
        "Energ_Kcal": 58,
        "Protein": 0.38,
        "Lipid_Tot": 0.12,
        "Carbohydrt": 15.46,
        "Sugar_Tot": 9.8,
        "Sodium": 1,
        "Cholestrl": 0,
    },
    "roast pork": {
        "Energ_Kcal": 273,
        "Protein": 26.83,
        "Lipid_Tot": 17.61,
        "Carbohydrt": 0,
        "Sugar_Tot": 0,
        "Sodium": 60,
        "Cholestrl": 94,
    },
    "sausage": {
        "Energ_Kcal": 346,
        "Protein": 14.25,
        "Lipid_Tot": 31.33,
        "Carbohydrt": 0.65,
        "Sugar_Tot": 0,
    },
    "ham": {
        "Energ_Kcal": 245,
        "Protein": 17,
        "Lipid_Tot": 19,
        "Carbohydrt": 0,
        "Sugar_Tot": 0,
    },
    "milk": {
        "Energ_Kcal": 48,
        "Protein": 3.93,
        "Lipid_Tot": 1.17,
        "Carbohydrt": 5.52,
        "Sugar_Tot": 0,
    },
    "egg": {
        "Energ_Kcal": 317,
        "Protein": 15.86,
        "Lipid_Tot": 26.54,
        "Carbohydrt": 3.59,
        "Sugar_Tot": 0.56,
    },
    "soup": {
        "Energ_Kcal": 36,
        "Protein": 2.52,
        "Lipid_Tot": 1.2,
        "Carbohydrt": 3.53,
        "Sugar_Tot": 1.58,
    },
    "hamburger": {
        "Energ_Kcal": 346,
        "Protein": 20.52,
        "Lipid_Tot": 20.2,
        "Carbohydrt": 20.53,
        "Sugar_Tot": 3.58,
    },
    "doughnut": {
        "Energ_Kcal": 452,
        "Protein": 4.93,
        "Lipid_Tot": 25.25,
        "Carbohydrt": 51.33,
        "Sugar_Tot": 26.65,
    },
    "muffin": {
        "Energ_Kcal": 276,
        "Protein": 8.87,
        "Lipid_Tot": 2.21,
        "Carbohydrt": 55.04,
        "Sugar_Tot": 13.34,
    },
    "cookies": {
        "Energ_Kcal": 384,
        "Protein": 3.8,
        "Lipid_Tot": 11.1,
        "Carbohydrt": 71.3,
        "Sugar_Tot": 0.09,
    },
    "waffles": {
        "Energ_Kcal": 285,
        "Protein": 6.47,
        "Lipid_Tot": 9.7,
        "Carbohydrt": 42.98,
        "Sugar_Tot": 4.91,
    }
};