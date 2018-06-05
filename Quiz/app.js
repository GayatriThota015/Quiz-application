function populate() {
	if(quiz.isEnded()) {
		showScores();
	}
	else 
	{
			var element = document.getElementById("question");
			element.innerHTML = quiz.getQuestionIndex().text;
		

			var choices = quiz.getQuestionIndex().choices;
			for(var i = 0; i< choices.length; i++)
			{
			var element = document.getElementById("choice" + i);
			element.innerHTML = choices[i];
			guess("btn" + i, choices[i]);
			}
			showProgress();
	}
};

function guess(id,guess) {
	var button = document.getElementById(id);
	button.onclick = function() {
		quiz.guess(guess);
		populate();
	}
};

function showProgress() {
	var currentQuestionNumber = quiz.questionIndex + 1;
	var element = document.getElementById("progress");
	element.innerHTML = "Question "  + currentQuestionNumber + " of " +quiz.questions.length;
}
function showScores() {
	var gameOverHtml = "<h1>Result</h1>";
	gameOverHtml += "<h2 id='score'> Your scores: "+ quiz.score + "</h2>";
	var element = document.getElementById("quiz");
	element.innerHTML = gameOverHtml;

};






var questions = [
	new Question("1.Inside which HTML element do we put the JavaScript?",["javascript","js","script","scripting"],"script"),
	new Question("2.which operator is not used?",["+","/","*","@"],"@"),
	new Question("3.What is the default value of String variable?",["--"," '' ","null","not defined"],"null"),	
	new Question("4.What is function overloading?",["Methods with same name but different parameters.","Methods with same name but different return types.","Methods with same name, same parameter types but different parameter names.","None of the above."],"Methods with same name but different parameters."),
	new Question("5.What happens when thread's sleep() method is called?",["Thread returns to the ready state.","Thread returns to the waiting state.","Thread starts running.None of the above."],"Thread returns to the waiting state."),
	new Question("6.Which of the following is a marker interface?",["serializable","comparable","cloneable","none of the above"],"serializable"),
	new Question("7.Can try statements be nested?",["True.","False.","May be","not sure"],"True"),
	new Question("8.Can be constructor be made final?",["True.","False.","May be","not sure"],"False"),
	//new Question("9.What is a class in java?",["A class is a blue print from which individual objects are created. A class can contain fields and methods to describe the behavior of an object.","class is a special data type.","class is used to allocate memory to a data type.","none of the above."],"A class is a blue print from which individual objects are created. A class can contain fields and methods to describe the behavior of an object.")
	//new Question("10.What is instance variable?",["Instance variables are static variables within a class but outside any method.","Instance variables are variables defined inside methods, constructors or blocks.","Instance variables are variables within a class but outside any method.","None of the above."],"Instance variables within a class but outside any method"),*/
];

var quiz =  new Quiz(questions);
populate();
