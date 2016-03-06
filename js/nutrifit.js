// Instantiation of various vars
var unit = "",
    name = "",
    age = 0,
    gender = "",
    weight = 0,
    exer = 0,
    fat = 0.0,
    prot = 0.0,
    carb = 0.0,
    c = 1,
    cal = 0.0,
    min = 0.0,
    per_fat = 0.0,
    per_carb = 0.0,
    per_prot = 0.0,
    cal_eaten = 0.0,
    returnFood = "";


var setCal = function() {
    if (gender == "male") {
        if (exer == 0) {
            min = 1.3;
        } else if (exer == 1) {
            min = 1.6;
        } else if (exer == 2) {
            min = 1.7;
        } else if (exer == 3) {
            min = 2.1;
        }
        if (age < 3) {
            cal = 60 * min * weight - 30;
        } else if (age >= 3 && age < 10) {
            cal = 23 * min * weight + 505
        } else if (age >= 10 && age < 18) {
            cal = 18 * min * weight + 659;
        } else if (age >= 18 && age < 30) {
            cal = 15 * min * weight + 692;
        } else if (age >= 30 && age < 60) {
            cal = 11.4 * min * weight + 873;
        } else if (age >= 60) {
            cal = 11.7 * min * weight + 587;
        }
    } else if (gender == "female") {
        if (exer == 0) {
            min = 1.3;
        } else if (exer == 1) {
            min = 1.5;
        } else if (exer == 2) {
            min = 1.6;
        } else if (exer == 3) {
            min = 1.9;
        }
        if (age < 3) {
            cal = 58 * min * weight - 31;
        } else if (age >= 3 && age < 10) {
            cal = 20 * min * weight + 485
        } else if (age >= 10 && age < 18) {
            cal = 13 * min * weight + 692;
        } else if (age >= 18 && age < 30) {
            cal = 15 * min * weight + 486;
        } else if (age >= 30 && age < 60) {
            cal = 8 * min * weight + 845;
        } else if (age >= 60) {
            cal = 9 * min * weight + 658;
        }
    }
}

function calc() //function gets called every time user says a food article
{
    cal_eaten += c * (fat * 9 + prot * 4 + carb * 4);
    per_fat = (fat * 9 / cal_eaten);
    per_prot = (prot * 4 / cal_eaten);
    per_carb = (carb * 4 / cal_eaten);
}

function op() {
    for (key in dataset) {
        if (per_fat < .28) {
            //Print eat more fat
            var val = (.30 - per_fat);
            var Eat = val * cal;
            //Display to screen Eat
            if (dataset[key]["Energ_Kcal"] <= Eat) {
                returnFood = key;
                break;
            }
        }
        if (per_fat > .32) {
            //print eat less fat
            var val = (per_fat - 0.30);
            var Eat = val * cal;
            //Display to screen Eat

        }
        if (per_prot > .23) {
            //print eat less prot
            var val = (per_prot - 0.20);
            var Eat1 = val * cal;
            //Display to screen Eat
        }
        if (per_prot < .19) {
            //print eat more prot
            var val = (0.20 - per_prot);
            var Eat1 = val * cal;
            if (dataset[key]["Energ_Kcal"] <= Eat) {
                returnFood = key;
                break;
            }
        }
        if (per_carb < .48) {
            //print eat more carb
            var val = (0.50 - per_carb);
            var Eat2 = val * cal;
            //Display to screen Eat
            if (dataset[key]["Energ_Kcal"] <= Eat) {
                returnFood = key;
                break;
            }
        }
        if (per_carb > .51) {
            //print eat less carb
            var val = (per_carb - 0.50);
            var Eat2 = val * cal;
            //Display to screen Eat
        }

    }

}



var caloriesOption = function(calories) {

    return true;
}

var caloriesShould = function(food) {
    var name = dataset[food];
    var cb = name["Energ_Kcal"];
    if (cal - cal_eaten - cb < 0) {
        return false;
    }
    return true;
}


// var name;

var caloriesBurn = 0;

// updateCalories = function(calories) {
//     $("#calorie-cntr").text(calories);
// }
// updateFat = function(calories) {
//     $("#calorie-cntr").text(calories);
// }
// updateProt = function(calories) {
//     $("#calorie-cntr").text(calories);
// }

var log = [];

var leanSchedule = [{
    time: "7 am",
    activity: "Breakfest, egg and wheat bread"
}, {
    time: "9 am",
    activity: " 30 mintue Run"
}, {
    time: "11 am",
    activity: "Cycling Club"

}, {
    time: "12 pm",
    activity: "Lunch, chicken and caesar salad"
}, {
    time: "3 pm",
    activity: "Lean Weight Training, core and legs"
}, {
    time: "4 pm",
    activity: "Snack, fruits"
}, {
    time: "7 pm",
    activity: "Dinner, salmon with steam vegetables"


}, {
    time: "9 am",
    activity: "Sleep"
}];


// NutriFit Functions
say = function(speech) {
    responsiveVoice.speak(speech, "UK English Female");
}

startCoach = function() {
    say("Hello and welcome to NutriFit! I am Shirley, your personal nutritionist A I. What is your name?");
    setTimeout(function() {
        reqUserInfo("getName");
    }, 5500);
}

var user = {};

// Function dedicated for requesting user info including Name, Gender, Weight and Age
reqUserInfo = function(reqParam) {
    console.log("Requesting... ");
    console.log(reqParam);
    setTimeout(function() {
        window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition || null;
        if (window.SpeechRecognition == null) {
            console.log('empty');
        } else {

            // MICROPHONE RECOGNITION
            var recognizer = new window.SpeechRecognition();
            recognizer.continuous = false;
            var text = "";
            recognizer.onresult = function(event) {
                for (var i = event.resultIndex; i < event.results.length; i++) {
                    if (event.results[i].isFinal) {
                        text = event.results[i][0].transcript;
                    } else {
                        text += event.results[i][0].transcript;
                    }
                }
                var userVoiceInput = text.toLowerCase();
                var splitScript = event.results[0][0].transcript.split(" ");
                console.log("arrive at params");

                // Get user name
                if (reqParam == "getName") {
                    console.log("Getting username...");
                    name = splitScript[splitScript.length - 1];
                    say("Hey there " + name + "!");
                    init_firebase(name);
                    // Check database if user sessions are greater than 1 here

                    say("What is your gender?");
                    setTimeout(function() {
                        reqUserInfo("getGender");
                    }, 3000);
                }

                // Get user gender
                else if (reqParam == "getGender") {
                    console.log("Getting user gender...");
                    if (userVoiceInput == 'male' || userVoiceInput == 'mail')
                        gender = 'male';
                    else if (userVoiceInput == 'female')
                        gender = 'female';
                    else
                        gender = 'other';
                    say("Okay, got it - you are " + gender);
                    $("#gender").text(gender);
                    say("How many pounds do you weigh?");
                    setTimeout(function() {
                        reqUserInfo("getWeight");
                    }, 4000);
                }

                // Get user weight
                else if (reqParam == "getWeight") {
                       weight = parseInt(splitScript[0]);
                    console.log(splitScript[0] + " -> " + weight);
                    console.log("Getting user weight...");
                    if (userVoiceInput.indexOf('i don\'t know') >= 0) {
                        weight = 150;
                        say("Okay, let's just say you're 150 pounds then.");
                    } else if (weight <= 0 || weight >= 1000) {
                        weight = 150;
                        say("Okay, let's just say you're 150 pounds.");
                    } else {
                        weight = 150;
                        // weight = callNutriFit("getWeight");
                        if (userVoiceInput.indexOf('kilograms')) {
                            systemUse = "metric";
                        } else {
                            systemUse = "imperial";
                        }
                        say("Okay, got it - you weigh " + weight + " pounds.");

                    }
                    $("#weight").text(weight + " lbs.");
                    say("How many years old are you?");
                    setTimeout(function() {
                        reqUserInfo("getAge");
                    }, 5000);
                }

                // Get user age
                else if (reqParam == "getAge") {
                    console.log("Getting user age...");
                    // age = callNutriFit("getAge");
                    age = splitScript[0];
                    if(isNaN(age))
                      age = 20;
                    else
                      age = parseInt(age);
                    $("#age").text(age);
                    say("Okay, got it - you are " + age + " years old.");
                    say("On a scale of 1 to 3, how much do you exercise?");
                    setTimeout(function() {
                        reqUserInfo("getExer");
                    }, 5000);
                } else if (reqParam == "getExer") {
                    console.log("Getting user exercise level...");
                    exer = 2;
                    setCal()
                    say("Alright, I have saved your information!");
                    setCal();
                }

                // Catch alien calls
                else {
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

beginLoop = function() {
    console.log("Loop Beginning");
    var stayloop = 1;
    while (stayloop) {
        setTimeout(function() {
            window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition || null;
            if (window.SpeechRecognition == null) {
                console.log('empty');
            } else {

                var text = "";
                // MICROPHONE RECOGNITION
                var recognizer = new window.SpeechRecognition();
                recognizer.continuous = false;
                recognizer.onresult = function(event) {
                    for (var i = event.resultIndex; i < event.results.length; i++) {
                        if (event.results[i].isFinal) {
                            text = event.results[i][0].transcript;
                        } else {
                            text += event.results[i][0].transcript;
                        }
                    }
                    var userVoiceInput = text.toLowerCase();
                    if (userVoiceInput == 'hey shirley') {
                        say("Yes?");
                        callNutriFit();
                    } else if (userVoiceInput == 'exit') {
                        stayloop = 0;
                    }
                }
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
        }, 3000);
    }
}

callNutriFit = function() {
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
                    name: name,
                    text: text
                });
                var shirleyresponse;
                console.log("here")
                $.ajax({
                    type: "POST",
                    url: "/",
                    data: {
                        input: text
                    },
                    success: function(data) {
                        console.log(data);
                        var logData = {};
                        switch (data.intent) {

                            case 'Food_eaten':
                                shirleyresponse = "Great, I added that you have eaten " + data.number + data.food + " to your log";
                                responsiveVoice.speak(shirleyresponse, "UK English Female");
                                console.log("" + data.food);
                                var key2 = dataset[("" + data.food)];
                                console.log(dataset[("" + data.food)]);
                                prot += key2["Protein"];
                                fat += key2["Lipid_Tot"];
                                carb += key2["Carbohydrt"];
                                calc();
                                logData.food = data.food;
                                logData.count = data.number;
                                logData.date = new Date();
                                log.push(logData);
                                setTimeout(function(){
                                  $("#calorie-cntr").text("" + cal_eaten);
                                  $("#fat-cntr").text("" + fat);
                                  $("#protein-cntr").text("" + prot);
                                  $("#carb-cntr").text("" + carb);
                                }, 200);
                                //updateGraph("Mar 9", prot, fat, carb);
                                messagesRef.push({
                                    name: "shirley",
                                    text: shirleyresponse
                                });
                                break;
                            case 'Food_option':
                                if (caloriesShould(("" + data.food))) {
                                    shirleyresponse = "Great, you should eat " + data.food;
                                } else {
                                    shirleyresponse = "You should not eat " + data.food + " it overloads your diet."
                                }
                                responsiveVoice.speak(shirleyresponse, "UK English Female");
                                messagesRef.push({
                                    name: "shirley",
                                    text: shirleyresponse
                                });
                                break;

                            case 'Food_toeat':
                                op();
                                if (returnFood == "") {
                                    shirleyresponse = "There are no recommended foods."
                                    $("#shirleySuggest").text("" + returnFood);

                                } else {
                                    shirleyresponse = "You should eat" + returnFood;
                                }
                                responsiveVoice.speak(shirleyresponse, "UK English Female");
                                returnFood = "";
                                messagesRef.push({
                                    name: "shirley",
                                    text: shirleyresponse
                                });
                                break;
                            case 'Print_log':
                              console.log("Printing log...");
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
    }, 500);
    $("#calorie_cntr").text(cal_eaten);
    $("#fat_cntr").text(fat);
    $("#protein_cntr").text(prot);
    $("#carb_cntr").text(carb);
}


/**
callNutriFit = function(userVoiceInput, param) {
  responsiveVoice.cancel();
    console.log("Calling NutriFit AI");
    var logData = {};
    var nutrifitResponse;

    var userInput = userVoiceInput;

    if (userInput == null) {
        setTimeout(function() {
            window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition || null;
            if (window.SpeechRecognition == null) {
                console.log('empty');
            } else {

                var text = "";
                // MICROPHONE RECOGNITION
                var recognizer = new window.SpeechRecognition();
                recognizer.continuous = false;
                recognizer.onresult = function(event) {

                    for (var i = event.resultIndex; i < event.results.length; i++) {
                        if (event.results[i].isFinal) {
                            text = event.results[i][0].transcript;
                        } else {
                            text += event.results[i][0].transcript;
                        }
                    }
                    var userInput = text.toLowerCase();
                    if (userInput == 'hey shirley') {
                        say("Yes?");
                        callNutriFit();
                    }
                }
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
        }, 1000);
    }

    $.ajax({
        type: "POST",
        url: "/",
        data: {
            input: userInput
        },
        success: function(data) {
            console.log(data);
            switch (param) {
                case "getAge":
                    age = parseInt(splitScript[splitScript.length - 1]);
                    if (age == undefined) {
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
                        name: "Shirley",
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
                        name: "Shirley",
                        text: nutrifitResponse
                    });
                    break;

                case 'Food_toeat':
                    op();
                    if (returnFood == "") {
                        nutrifitResponse = "There are no recommended foods."
                        $("#shirleySuggest").text("" + returnFood);

                    } else {
                        nutrifitResponse = "You should eat" + returnFood;
                    }
                    responsiveVoice.speak(nutrifitResponse, "UK English Female");
                    returnFood = "";
                    messagesRef.push({
                        name: "Shirley",
                        text: nutrifitResponse
                    });
                    break;
            }
        }
    });
}
**/

var messagesRef;

// REGISTER DOM ELEMENTS
var messageField = $('#messageInput');
var nameField = $('#nameInput');
var messageList = $('#messages');
var key;

getFrom = function(url) {
    $.ajax({
        type: "GET",
        url: url,
        success: function(data) {
            return data;
        }
    });
}

var userData;

//Firebase
// CREATE A REFERENCE TO FIREBASE
init_firebase = function(username) {
    console.log(username);
    $("#username").text(username);
    messagesRef = new Firebase('https://nutrifit.firebaseio.com/' + username);
    eventsRef = new Firebase('https://nutrifit.firebaseio.com/' + username + '/events/');
    console.log("Attempted to connect to https://nutrifit.firebaseio.com/" + username + ' and /' + username + '/events/');
    messagesRef.push({
        name: "NutriFit",
        text: "Hi " + username + ", it's nice to see you!"
    });
    messagesRef.push({
        name: "NutriFit",
        text: "Say Things Like 'I ate a cheeseburger', 'Should I eat roast pork?', 'What should I eat?', 'NutriFit, give me my log'"
    });

    userData = getFrom('https://nutrifit.firebaseio.com/' + username + '/.json');

    // $("#calories").text(userData.caloriesBurned);
    // $("#nutrifitSuggest").text("messagesRef".nutrifitSuggest);

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
            var keyRef = new Firebase('https://nutrifit.firebaseio.com/' + name + key);
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
