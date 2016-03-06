
sayThings = function(){
    var things = $("#things").val();
    say(things);
}

say = function(speech) {
    responsiveVoice.speak(speech, "US English Female");
}

// Instantiate Firebase Connections
var nutrifit_db_users, nutrifit_db_food;

init_db = function(){
    // To Users Firebase Collection
    nutrifit_db_users = new Firebase('https://nutrifit.firebaseio.com/users/');
    console.log("Attempted to connect to https://nutrifit.firebaseio.com/users/");
    if(nutrifit_db_users)
        console.log("Successfully connected!");
    else
        console.log("Error connecting to Firebase/users!");

    // To Food Firebase Collection
    nutrifit_db_food = new Firebase('https://nutrifit.firebaseio.com/food/');
    console.log("Attempted to connect to https://nutrifit.firebaseio.com/food/");
    if(nutrifit_db_food)
        console.log("Successfully connected!");
    else
        console.log("Error connecting to Firebase/food!");
}

// Push All Food Data to Firebase Database
function pushFood(){
    for(var i = 0; i < data.length; i++){
        nutrifit_db_food.push(data[i]);
    }
}


function getFood(){
    nutrifit_db_food.once("value", function(data){
        console.log(data);
    });
}

function deleteFirebase(){
    nutrifit_db.remove();
}

var data = [

  {
    "NDB_No": 1,
    "Shrt_Desc": "Cheddar Cheese",
    "Energ_Kcal": 403,
    "Protein": 24.9,
    "Lipid_Tot": 33.14,
    "Carbohydrt": 1.28,
    "Sugar_Tot": 0.52
  },
  {
    "NDB_No": 2,
    "Shrt_Desc": "Roasted Turkey",
    "Energ_Kcal": 208,
    "Protein": 28.1,
    "Lipid_Tot": 9.73,
    "Carbohydrt": 0,
    "Sugar_Tot": 0,
    "Sodium": 68,
    "Cholestrl": 82,
  },
  {
    "NDB_No": 3,
    "Shrt_Desc": "Fried Chicken",
    "Energ_Kcal": 289,
    "Protein": 22.54,
    "Lipid_Tot": 17.35,
    "Carbohydrt": 9.42,
    "Sugar_Tot": 0,
    "Sodium": 292,
    "Cholestrl": 87,
  },
  {
    "NDB_No": 4,
    "Shrt_Desc": "Apple",
    "Energ_Kcal": 52,
    "Protein": 0.26,
    "Lipid_Tot": 0.17,
    "Carbohydrt": 13.81,
    "Sugar_Tot": 10.39,
    "Sodium": 1,
    "Cholestrl": 0,
  },
  {
    "NDB_No": 5,
    "Shrt_Desc": "Banana",
    "Energ_Kcal": 89,
    "Protein": 1.09,
    "Lipid_Tot": 0.33,
    "Carbohydrt": 22.84,
    "Sugar_Tot": 12.23,
    "Sodium": 1,
    "Cholestrl": 0,
  },
  {
    "NDB_No": 6,
    "Shrt_Desc": "Blueberries",
    "Energ_Kcal": 57,
    "Protein": 0.74,
    "Lipid_Tot": 0.33,
    "Carbohydrt": 14.49,
    "Sugar_Tot": 9.96,
    "Sodium": 1,
    "Cholestrl": 0,
  },
  {
    "NDB_No": 7,
    "Shrt_Desc": "Orange Juice",
    "Energ_Kcal": 45,
    "Protein": 0.7,
    "Lipid_Tot": 0.2,
    "Carbohydrt": 10.4,
    "Sugar_Tot": 8.4,
    "Sodium": 1,
    "Cholestrl": 0,
  },
  {
    "NDB_No": 8,
    "Shrt_Desc": "Pear",
    "Energ_Kcal": 58,
    "Protein": 0.38,
    "Lipid_Tot": 0.12,
    "Carbohydrt": 15.46,
    "Sugar_Tot": 9.8,
    "Sodium": 1,
    "Cholestrl": 0,
  },
  {
    "NDB_No": 9,
    "Shrt_Desc": "Roast Pork",
    "Energ_Kcal": 273,
    "Protein": 26.83,
    "Lipid_Tot": 17.61,
    "Carbohydrt": 0,
    "Sugar_Tot": 0,
    "Sodium": 60,
    "Cholestrl": 94,
  }

];