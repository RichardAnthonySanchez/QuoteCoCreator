var model = {

numFormulas: 91, //would be better if I used arr.length
numWords: 4, //the number of words that effect the modular formulas
initGen: 0, //did we initially generate forumlas with the user's words? N: 0, Y: 1
completedFormulas: [], //my inital random number
dupeCompletedFormulas: [], //a duplicate of my random number as a back up
userInputs: [], //hold the user's words here
formulas: [], //hold all the hardcoded formulas here
counter: 0, //how many times has newtweet been clicked
backCounter: 1, //how many times has back been clicked
randomFormulaArr: [] //this is a bank of the formulas in a random order
 

};
	
var controller = {
	
	randomFormulaOrder: function () { //this code banks the formulas in a random order as soon as the page loads.
		var numberOfFormulas = model.numFormulas;
		while (model.randomFormulaArr.length < numberOfFormulas) {
			var randomNumber = Math.floor(Math.random() * numberOfFormulas);
			if (model.randomFormulaArr.indexOf(randomNumber) === -1) model.randomFormulaArr.push(randomNumber);
			}
	},
	
	combineWordsToFormula: function() { //this code moves through the formula bank chronologically and pushes the user's inputs into the formula
		
		model.completedFormulas.push(model.randomFormulaArr[model.counter]);
		model.dupeCompletedFormulas.push(model.randomFormulaArr[model.counter]);
		
		console.log(controller.dupeFormulas());
		console.log(model.completedFormulas); 
		view.displayTweet(controller.dupeFormulas());
		
		model.counter++;
	},
	
	generateTweet: function() {
		controller.addWords();
		if (model.userInputs.length > model.numWords) {
		controller.spliceInputs(); //don't allow more than the number of words in the array 
	}
		console.log(model.userInputs);//tell the user their words in the console
	
		if (model.initGen === 0) { //generate formulas if we haven't already then never generate them again
		controller.generateFormulas();
	}
		model.initGen++;
	
		controller.combineWordsToFormula(); //user's words attach to the generated formula
},

generateFormulas: function () { //I don't think this is being used.
		/*model.formulas.push(model.userInputs[0] + " is what wakes up the inner " + model.userInputs[2]);
		model.formulas.push("find friends who " + model.userInputs[0] + " to your face but " + model.userInputs[1] + " behind your back");
		model.formulas.push("what i need isn't " + model.userInputs[0] +" but " + model.userInputs[2]); */
},

addWords: function() {
	for (i = 0; i < model.numWords; i++) {
	var wordInput = document.getElementById("wordInput" + i);
	var word = wordInput.value;
	model.userInputs.push(word); //push the user's words to the array
	}	
},

spliceInputs: function () { //this clears all the user's words when they request to use new words
	model.userInputs.splice(model.userInputs[0], 1);
	model.userInputs.splice(model.userInputs[1], 1);
	model.userInputs.splice(model.userInputs[2], 1);
	model.userInputs.splice(model.userInputs[3], 1);
},

updateTweet: function() { 
	controller.spliceInputs();
	controller.addWords();
	
	controller.dupeFormulas[model.completedFormulas[model.completedFormulas.length - model.backCounter]]; //use the random number access the same formula but use the new words
	console.log(model.userInputs);
	view.displayTweet(controller.dupeFormulas(- model.backCounter));
	console.log(controller.dupeFormulas(- model.backCounter)); 
},

dupeFormulas: function (last) {
		var arr = [ model.userInputs[0] + " is what wakes up the inner " + model.userInputs[2]
		, "find friends who " + model.userInputs[0] + " to your face but " + model.userInputs[1] + " behind your back"
		, "what i need isn't " + model.userInputs[0] +" but " + model.userInputs[2] 
		, "how can anyone deny " + model.userInputs[2] + " but support " + model.userInputs[3] 
		, "what matters isn't how " + model.userInputs[0] + " life is but how " + model.userInputs[1]
		, "you move different when you stop " + model.userInputs[0] + " and start " + model.userInputs[1]
		, "the easiest way to see a man's " + model.userInputs[2] + " is to look at his " + model.userInputs[3]
		, "people would rather debate " + model.userInputs[2] + " than connect over " + model.userInputs[3]
		, "wisdom is when you " + model.userInputs[0] + " but still " + model.userInputs[1]
		, "the greatest way to spend your time is " + model.userInputs[0] + " when most " + model.userInputs[2]
		, "the most important " + model.userInputs[2] + " to choose is the right " + model.userInputs[3]
		, "the " + model.userInputs[2] + " will never do you wrong if you know how to " + model.userInputs[0]
		, "the faster you " + model.userInputs[0] + ", the faster you'll " + model.userInputs[1]
		, "you have to " + model.userInputs[0] + " even if there's no " + model.userInputs[2]
		, "walking into " + model.userInputs[2] + " just to " + model.userInputs[0] + " and leave"
		, "the longer you " + model.userInputs[0] + ", the longer you'll remain " + model.userInputs[1]
		, "if you don't make time for " + model.userInputs[0] + ", you'll be forced to make time for " + model.userInputs[2]
		, "men desire " + model.userInputs[0] + " to the same extent as " + model.userInputs[2]
		, "men pursue " + model.userInputs[2] + " so much that they " + model.userInputs[0]
		, "the secret is not found in more " + model.userInputs[2] + " but in less " + model.userInputs[3]
		, "a lot of " + model.userInputs[2] + " are coping mechanisms from " + model.userInputs[3]
		, "I wish I learned " + model.userInputs[0] + " before I " + model.userInputs[1]
		, "people who talk about " + model.userInputs[0] + " never " + model.userInputs[1]
		, "commit to " + model.userInputs[0] + " and you'll figure out " + model.userInputs[2]
		, "hearing "+ model.userInputs[2] + " hits different when you hear it from " + model.userInputs[3]
		, "I realized the only person I " + model.userInputs[0] + " is myself which means I have to " + model.userInputs[1]
		, "stop "+ model.userInputs[0] + " in a way you'd never accept from " + model.userInputs[2]
		, "not caring about " + model.userInputs[2] + " is like not caring about " + model.userInputs[3] + " a decade ago"
		, "30 minutes of " + model.userInputs[0] + " a day will change the way you " + model.userInputs[1]
		, "most people " + model.userInputs[0] + ", fulfillment comes from " + model.userInputs[2]
		, "a good " + model.userInputs[2] + " can be indentified by its " + model.userInputs[3] + " alone"
		, model.userInputs[2] + " may get you to the top but " + model.userInputs[0] + " keeps you there"
		, "happy people free themselves from " + model.userInputs[2] + " because of the gift of " + model.userInputs[0]
		, "either do " + model.userInputs[0] + " now or "+ model.userInputs[2] + " later"
		, model.userInputs[0] + " works better than " + model.userInputs[2]
		, "if you are " + model.userInputs[2] + ", you are " + model.userInputs[0]
		, "lack of " + model.userInputs[0] + " is a lack of " + model.userInputs[2]
		, "people who don't " + model.userInputs[0] + " can't find " + model.userInputs[2]
		, "most people are capable of " + model.userInputs[2] + " significant people make " + model.userInputs[3]
		, "be as " + model.userInputs[0] + " as possible so you can't become " + model.userInputs[1]
		, "the tighter you cling to " + model.userInputs[2] + " the harder it becomes to let go of " + model.userInputs[3]
		, "keep everything " + model.userInputs[2] + " people can't " + model.userInputs[3]
		, "stop focusing on " + model.userInputs[2] +  " start focusing on " + model.userInputs[3]
		, "going through life thinking " + model.userInputs[2] + " is only going to " + model.userInputs[0]
		, "be educated by " + model.userInputs[2] + " not by " + model.userInputs[3]
		, "you can tell what a man "+ model.userInputs[0] + " by "+ model.userInputs[2]
		, "if you don't know your " + model.userInputs[2] + " it's difficult to " + model.userInputs[0]
		, "if you want to lose " + model.userInputs[2] + ", gain " + model.userInputs[3]
		, "give the world " + model.userInputs[2] + " and it will give you " + model.userInputs[3]
		, "boasting about " + model.userInputs[0] + " isn't cool; it's a sign of " + model.userInputs[2]
		, "your "+ model.userInputs[0] + " will make people uncomfotable because they'd rather " + model.userInputs[1]
		, "the modern " + model.userInputs[2] + " is the classic " + model.userInputs[3]
		, "a society is " + model.userInputs[2] + " when " + model.userInputs[3]
		, model.userInputs[0] + " is just a side effect of " + model.userInputs[1]
		, model.userInputs[2] + " will now be known as " + model.userInputs[3] + " from this day forward"
		, "I'd rather be a poor " + model.userInputs[2] + " than a rich " + model.userInputs[3]
		, "love "+ model.userInputs[0] + " before life teaches you " + model.userInputs[2]
		, "the only reason people don't " + model.userInputs[0] + " is because they don't have " + model.userInputs[2]
		, "isn't it funny how when you " + model.userInputs[0] + " the first thing you do is " + model.userInputs[1]
		, "avoid people who " + model.userInputs[0] + " in " + model.userInputs[2]
		, "if you did the research before you " + model.userInputs[0] + " you would realize " + model.userInputs[2]
		, "the more you " + model.userInputs[0] + ", the harder you " + model.userInputs[1]
		, "the real world doesn't " + model.userInputs[0] + ", it " + model.userInputs[1]
		, "i don't trust anyone who " + model.userInputs[0] + " because " + model.userInputs[2]
		, "name one " + model.userInputs[2] + " that doesn't " + model.userInputs[0]
		, "some of you need to " + model.userInputs[0] + " and " + model.userInputs[1]
		, "greatness doesn't mean you excel in " + model.userInputs[2] + ", it means you excel at " + model.userInputs[3]
		, "open the door on " + model.userInputs[0] + " so you can close the door on " + model.userInputs[1]
		, "the world is turning into " + model.userInputs[2] + " where everything is " + model.userInputs[3]
		, "there's a huge difference between " + model.userInputs[0] + " and " + model.userInputs[1]
		, "i don't believe in " + model.userInputs[0] + " i don't want " + model.userInputs[1]
		, "everything changes when you realize " + model.userInputs[0] + " and forget " + model.userInputs[1]
		, "even if you " + model.userInputs[0] + " doesn't mean you deserve " + model.userInputs[2]
		, "most guys " + model.userInputs[0] + " because they fear " + model.userInputs[2]
		, "shallow men believe in " + model.userInputs[2] + " strong men believe in " + model.userInputs[0]
		, "getting " + model.userInputs[2] + " should be considered " + model.userInputs[3]
		, "it's okay to " + model.userInputs[0] + " but it's not okay to " + model.userInputs[1]
		, "your " + model.userInputs[2] + " will be admired only after you " + model.userInputs[0]
		, "you don't have to predict " + model.userInputs[2] + " only master " + model.userInputs[0]
		, "the method for measuring the " + model.userInputs[0] + " of a man is to look at his " + model.userInputs[2]
		, "being strong is " + model.userInputs[2] + " being weak is " + model.userInputs[3]
		, model.userInputs[0] + " is an essential feature of " + model.userInputs[2]
		, "the reason I do anything is less about " + model.userInputs[2] + " and more about " + model.userInputs[0]
		, "to accomplish anything, " + model.userInputs[0] + " persists after " + model.userInputs[1] + " has faded"
		, "don't " + model.userInputs[0] + " until a " + model.userInputs[2] + " is identified"
		, model.userInputs[2] + " is a chase for " + model.userInputs[0]
		, "my desire to " + model.userInputs[0] + " caught fire when adults stopped forcing me to " + model.userInputs[1]
		, "if you have no desire to " + model.userInputs[0] + " it's time to " + model.userInputs[1]
		, "don't get jealous of " + model.userInputs[2] + " you should be " + model.userInputs[0]
		, "some people learn from " + model.userInputs[2] + " and some people stay stuck in " + model.userInputs[3]
		, "I've been in " + model.userInputs[2] + " for 1 hour and already have " + model.userInputs[3]
		, "cutting off those who " + model.userInputs[0] + " is " + model.userInputs[2]
		] //hold the formulas in an array so they aren't hardcoded
		
		if (last <= -1) { //this code holds all formulas used in chronological order incase the user wants to access previous work
			return arr[model.dupeCompletedFormulas[model.dupeCompletedFormulas.length - model.backCounter]]
		}
		else if (model.completedFormulas[0] > - 1) {
			return arr[model.completedFormulas[model.completedFormulas.length - 1]]	
		} 
	
	},
	
	backButton: function() {
		model.backCounter++;
		console.log(model.userInputs);
		console.log(controller.dupeFormulas(-2)); //this looks at the previous formula in the bank incase the user wants to work with it
		console.log(model.randomFormulaArr);
		view.displayTweet(controller.dupeFormulas(-2));
	}

};

var view = { //show the user their words added to the formula
	
	displayTweet: function (msg) {
	
	var messageArea = document.getElementById("messageArea");
	messageArea.innerHTML = msg;
	}
};
window.onload = init;

function init() {
	controller.randomFormulaOrder();
	
	var generateButton = document.getElementById("generateButton");
	generateButton.onclick = controller.generateTweet;
	
	var updateButton = document.getElementById("updateButton");
	updateButton.onclick = controller.updateTweet;
	
	var backButton = document.getElementById("backButton");
	backButton.onclick = controller.backButton;
}