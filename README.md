# BrickHacks 2
# NutriFit

####Team NutriFit - A Voice Interactive, A.I. Driven Nutritionist Web App

####Made by John Nguyen, David Bang, Aditya Bhavnani and William T Carver

####Best Health Hack: 1st Place
####Prize: Jawbone UP 2 + a MLH Finalist medal for each member!

######Semi working web version (doesn't work completely, all features work on local machine): http://nutrifit.azurewebsites.net/NutriFit/

##Inspiration
Everyone wants to live a healthy and fit life. But this is getting increasingly difficult to accomplish as people are eating less healthy food. Obesity is soaring globally and correlating diseases such as heart disease and diabetes are on the rise. Not everyone knows how or has the money to afford a personal dietitian. Introducing NutriFit, the personalized interactive, voice-driven A.I. nutritionist who will establish a personalized nutritional intake schedule based on food consumption. Shirley, NutriFit’s nutritionist, reports back with what you should do to maintain a perfect, healthy body.
##What it does
NutriFit is a platform where a user can talk to Shirley, a custom crafted dietitian A.I. Shirley uses machine learning to receive user input such as their name, weight, age, and gender as well as what they ate throughout the day. Think of her like Alexa, Siri, Cortana or Google Now, just spec'd out to help you have the perfect diet. You can ask Shirley if you can eat a specific kind of food and she’ll tell you if she recommends it or not.
All of this is personalized towards your own user profile that is generated dynamically along with your conversations with Shirley.
##How we built it
NutriFit is powered by modern web technologies, libraries and APIs including HTML5, CSS3, jQuery, Angular.js and Node.js.
Upon entering the app (HTML, CSS), jQuery and Angular.js communicate with ResponsiveVoice.js, Google's Web-Speech API, and API.AI to initialize voice interaction with the user and with Shirley. Upon receiving input, Shirley processes the speech before sending it to API.AI to parse the intents and entities from the user's input. From there, Shirley pipes the intent through the Node.js server hosted on our AWS EC2 Instance before finally coming back to the user as a fully interpreted response.
Throughout the process, Shirley is recording every input the user makes, making a log of the calorie, fat, protein, carbohydrate, sodium and cholesterol intake from the food he or she eats, thereby building up a personalized profile for each individual user. This allows Shirley to make educated decisions about users, including the amount of calories they've consumed and what they must or mustn’t eat in order to keep themselves fit in accordance with the Schofield Equation.
##Challenges we ran into
Our team initially tried to bootstrap NutriFit using the Ionic Framework but after 10 hours of pulling our hairs out (and another two hours of pulling our hairs out because of Ionic 2) we pivoted straight to vanilla web technologies and decided to build out our app with the desktop experience in mind first. Splitting the work and using the Agile methodology to power both of our workflows helped tremendously in this case. The secondary issue we faced was in developing our nutrition algorithms. Due to this, we spent around 20% of our time researching nutrition facts and algorithms.
##Accomplishments that we’re proud of
1.	Pivoting away from Ionic and making the right choice to switch to pure web
2.	Being highly organized using Trello and Facebook
3.	Implementing a custom A.I. agent to interpret user inputs
4.	Being able to send and receive audio-based inputs and outputs 
5.	Tying all of the technologies together through a coherent network of data piping

##What we learned
Our team went far in terms of what we learned. All the team members had skills in different fields; combining everybody’s individual knowledge in technologies such as HTML, CSS, Javascript and Node.js, and applying them to new ones such as API.AI were a challenge and required us to learn much about the connection between all of the technologies in regards to one another.
What's next for NutriFit
NutriFit is an idea we came up with after arriving at BrickHack. As for future endeavors, we would like to develop efficient and accurate machine learning models that analyze large datasets for chronic diseases such as diabetes and heart disease. We would utilize these predictive models in NutriFit by suggesting more comprehensive nutritional schedules such that users have reduced rates of developing chronic illnesses. Another major implementation would be launching a mobile application with push notifications so that the user can have access to his or her own nutritionist on the go.

